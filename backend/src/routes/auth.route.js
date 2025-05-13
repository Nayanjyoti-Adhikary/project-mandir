const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const router = express.Router();

// Authetication routes
router.post('/register', register);
router.post('/login', login); 

// This is just for testing
router.get('/ping', async (req,res) => {
    res.status(200).json({message: "Hello world!"})
});


module.exports = router;