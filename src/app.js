const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(cors()); // Simple CORS fix
app.use(express.json());

app.get('/', (req, res) => res.send('Server is live!'));
app.use('/ai', aiRoutes);

module.exports = app;
