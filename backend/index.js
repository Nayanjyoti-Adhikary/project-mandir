const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const donationRoutes = require('./routes/donations');  
const bhogRoutes = require('./routes/bhog');           
const db = require('./db'); 

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json()); 


app.use('/donations', donationRoutes);
app.use('/bhog', bhogRoutes);


db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1); 
  } else {
    console.log('Database connected successfully');
    connection.release(); 
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
