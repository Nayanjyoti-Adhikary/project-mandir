const pool = require('../config/db');

// This is repository where we will define all the database queries related to authentication
const registerUser = async (user) => {
  const { name, email, password } = user;

  try {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await pool.execute(query, [name, email, password]);

    return { success: true, userId: result.insertId };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const authenticateUser = async (email, password) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return false; // user not found
    }

    const user = rows[0];

    const passwordMatch = await user.password === password; // Replace with a proper hash comparison
    if (!passwordMatch) {
      return false;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
};

module.exports = {
    registerUser,
    authenticateUser
}
