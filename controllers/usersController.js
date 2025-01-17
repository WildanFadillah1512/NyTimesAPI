const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const query =
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  db.query(query, [username, hashedPassword, email], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id_user: user.id_user, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  });
};

exports.getProfile = (req, res) => {
  const { id_user } = req.user;

  const query = "SELECT username, email FROM users WHERE id_user = ?";
  db.query(query, [id_user], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.updateUser = (req, res) => {
  const { id_user } = req.user;
  const { username, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const query =
    "UPDATE users SET username = ?, email = ?, password = ? WHERE id_user = ?";
  db.query(query, [username, email, hashedPassword, id_user], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated successfully" });
  });
};

exports.deleteUser = (req, res) => {
  const { id_user } = req.user;

  const query = "DELETE FROM users WHERE id_user = ?";
  db.query(query, [id_user], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted successfully" });
  });
};
