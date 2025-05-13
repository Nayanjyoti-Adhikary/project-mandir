const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


// Load the CA certificate file from your local system
const sslCert = fs.readFileSync(path.join(__dirname, '../resources/sql_CA_Certificate.pem'));

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'dhritiman',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'test',
  port: process.env.DB_PORT || 3306,
  ssl: {
    ca: sslCert
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
