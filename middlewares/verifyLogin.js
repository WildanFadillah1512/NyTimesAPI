const db = require('../models/db');
const bcrypt = require('bcryptjs');

const verifyLogin = (req, res, next) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: "Username, password, and email are required" });
    }

    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "User not found" });

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);
        const isValidEmail = user.email === email;

        if (!isValidPassword || !isValidEmail) {
            return res.status(401).json({ message: 'Invalid verifyLogin' });
        }

        next();
    });
};

module.exports = verifyLogin;