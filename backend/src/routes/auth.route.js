const express = require('express');
const { register } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', register);
router.post('/ping', async (req,res) => {
    res.status(200).json({message: "Hello world!"})
});


module.exports = router;