const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { donor_name, amount, payment_method, remarks } = req.body;

 
  if (!donor_name || !amount || !payment_method) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  
  const sql = `
    INSERT INTO donations (donor_name, amount, payment_method, remarks)
    VALUES (?, ?, ?, ?)
  `;

  
  db.query(sql, [donor_name, amount, payment_method, remarks], (err, result) => {
    if (err) {
      console.error('Error inserting donation:', err);  // Log the error
      return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.status(201).json({ message: 'Donation recorded successfully', donationId: result.insertId });
  });
});

module.exports = router;




router.get('/', (req, res) => {
    const sql = 'SELECT * FROM donations';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching donations:', err);
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(200).json(results);
    });
  });
  