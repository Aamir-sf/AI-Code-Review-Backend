const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ CORS setup for frontend
const allowedOrigins = [
  "https://ai-code-review-lake.vercel.app", // live frontend
  "http://localhost:5173"                  // local frontend
];

const corsOptions = {
  origin: function(origin, callback){
    // agar origin undefined (Postman ya curl) ya allowed hai
    if(!origin || allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

// Body parser
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  try {
    res.send('hello world');
  } catch (err) {
    console.error("GET / error:", err);
    res.status(500).send("Internal Server Error");
  }
});


// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
