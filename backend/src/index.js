const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.route');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // No need for body-parser; express has built-in support

// Root API
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Satsang TU!'
  });
});

// Auth routes
app.use('/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
