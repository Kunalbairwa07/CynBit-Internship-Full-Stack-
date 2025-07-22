// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// force DB connection test
const pool = require('./db');
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB not connected:', err.message);
  } else {
    console.log('Connected to PostgreSQL DB!!');
  }
});