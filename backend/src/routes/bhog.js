const express = require('express');
const router = express.Router();
const db = require('../db');  


router.post('/', (req, res) => {
  const { date, items, remarks } = req.body;

  
  if (!date || !items) {
    return res.status(400).json({ message: 'Date and items are required' });
  }

  const sql = `INSERT INTO daily_bhog (date, items, remarks) VALUES (?, ?, ?)`;

  
  db.query(sql, [date, items, remarks], (err, result) => {
    if (err) {
      console.error('Error inserting bhog:', err);  
      return res.status(500).json({ message: 'Database error' });
    }
    
    res.status(201).json({ message: 'Bhog recorded successfully', bhogId: result.insertId });
  });
});


router.get('/', (req, res) => {
  const sql = `SELECT * FROM daily_bhog ORDER BY date DESC`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching bhog:', err);  // Log the error
      return res.status(500).json({ message: 'Database error' });
    }
    
    res.status(200).json(results);
  });
});

module.exports = router;
