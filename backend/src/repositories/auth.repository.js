// userRepository.js
const pool = require('../config/db');

// Inside userRepository.js
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

module.exports = {
    registerUser
}
