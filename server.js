require('dotenv').config();
const app = require('./src/app');

// Vercel automatically handles the port
module.exports = app;
