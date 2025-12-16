const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ CORS setup for frontend
const corsOptions = {
  origin: "https://ai-code-review-lake.vercel.app", // frontend URL
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

// Body parser
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('hello world');
});

// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
