const db = require('../models/db');

exports.getUserFavorites = (req, res) => {
    const { id_user } = req.user;

    const query = `
        SELECT f.id_favorite, a.title, a.author, a.published_date, a.url, c.name AS category
        FROM favorites f
        INNER JOIN articles a ON f.id_article = a.id_article
        INNER JOIN categories c ON a.id_category = c.id_category
        WHERE f.id_user = ?
    `;
    db.query(query, [id_user], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addFavorite = (req, res) => {
    const { id_article } = req.body;
    const { id_user } = req.user;

    const query = 'INSERT INTO favorites (id_user, id_article) VALUES (?, ?)';
    db.query(query, [id_user, id_article], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Added to favorites' });
    });
};

exports.updateFavorite = (req, res) => {
    const { id_favorite } = req.params;
    const { id_article } = req.body;
    const { id_user } = req.user;

    const query = 'UPDATE favorites SET id_article = ? WHERE id_favorite = ? AND id_user = ?';
    db.query(query, [id_article, id_favorite, id_user], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Favorite updated successfully' });
    });
};

exports.removeFavorite = (req, res) => {
    const { id_favorite } = req.params;

    const query = 'DELETE FROM favorites WHERE id_favorite = ?';
    db.query(query, [id_favorite], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Removed from favorites' });
    });
};
