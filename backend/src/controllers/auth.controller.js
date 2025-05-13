const { registerUser, authenticateUser } = require("../repositories/auth.repository");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const result = await registerUser({ name, email, password });

        if (result.success) {
            return res.status(201).json({ message: 'User registered successfully', userId: result.userId });
        } else if (result.error.includes('Duplicate entry')) {
            return res.status(409).json({ message: 'Email already exists' });
        } else {
            return res.status(400).json({ message: 'User registration failed', error: result.error });
        }
    } catch (error) {
        console.error('Controller error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const result = await authenticateUser(email, password);
    if (!result) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    res.status(200).json({ message: 'Login successful' });
}

module.exports = { register, login };
