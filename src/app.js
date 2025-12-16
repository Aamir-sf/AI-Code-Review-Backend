const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ CORS setup
const allowedOrigins = [
  "https://ai-code-review-lake.vercel.app", // live frontend
  "http://localhost:5173"                  // local frontend
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// Test route
app.get('/', (req,res) => res.send('hello world'));

// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
