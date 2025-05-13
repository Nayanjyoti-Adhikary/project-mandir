const express = require('express');
const authRoutes = require('./routes/auth.route');
const app = express();
const port = 5000;

require('dotenv').config();

app.use(express.json());

// API for test
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Satsang TU!'
  });
});

// Routes
app.use('/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
