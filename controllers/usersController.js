const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "Username, password and email are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const query =
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  db.query(query, [username, hashedPassword, email], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User registered successfully" });
  });
};

const login = (req, res) => {

  const user = req.user;

  const token = jwt.sign(
    { id_user: user.id_user, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
};

const getProfile = (req, res) => {

  const { id_user } = req.user;

  const query = "SELECT username, email FROM users WHERE id_user = ?";
  db.query(query, [id_user], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

const updateUser = (req, res) => {
  const { id_user } = req.user;
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "Username, password and email are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const query =
    "UPDATE users SET username = ?, email = ?, password = ? WHERE id_user = ?";
  db.query(query, [username, email, hashedPassword, id_user], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated successfully" });
  });
};

const deleteUser = (req, res) => {
  const { id_user } = req.user;

  const query = "DELETE FROM users WHERE id_user = ?";
  db.query(query, [id_user], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted successfully" });
  });
};

module.exports = { register, login, getProfile, updateUser, deleteUser }