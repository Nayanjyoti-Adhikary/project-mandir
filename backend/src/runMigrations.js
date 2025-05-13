// This is a script to run database migrations for a Node.js application using MySQL.
// Run using the terminal command: npm run migrate
const fs = require('fs');
const path = require('path');
const pool = require('./config/db');

const runMigrations = async () => {
  const migrationsDir = path.join(__dirname, 'migrations');

  const files = fs.readdirSync(migrationsDir).sort();

  for (const file of files) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf8');

    try {
      console.log(`Running migration: ${file}`);
      await pool.query(sql);
      console.log(`Migration ${file} executed successfully`);
    } catch (err) {
      console.error(`Migration ${file} failed:`, err);
    }
  }

  // Exit process after all migrations
  process.exit();
};

runMigrations();
