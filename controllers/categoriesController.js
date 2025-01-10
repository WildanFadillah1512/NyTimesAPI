const db = require('../models/db');

exports.getAllCategories = (req, res) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addCategory = (req, res) => {
    const { name } = req.body;

    const query = 'INSERT INTO categories (name) VALUES (?)';
    db.query(query, [name], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Category added successfully' });
    });
};

exports.updateCategory = (req, res) => {
    const { id_category } = req.params;
    const { name } = req.body;

    const query = 'UPDATE categories SET name = ? WHERE id_category = ?';
    db.query(query, [name, id_category], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Category updated successfully' });
    });
};

exports.deleteCategory = (req, res) => {
    const { id_category } = req.params;

    const query = 'DELETE FROM categories WHERE id_category = ?';
    db.query(query, [id_category], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Category deleted successfully' });
    });
};
