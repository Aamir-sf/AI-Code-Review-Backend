const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes'); // Path check karlein

const app = express();

// ✅ CORS ko simple rakhein (Taaki block na ho)
app.use(cors());

// ✅ JSON body parser (Zaroori hai)
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Server is live!'));
app.use('/ai', aiRoutes);

// Server listen (Vercel ke liye iski zaroorat nahi hoti but local ke liye thik hai)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;