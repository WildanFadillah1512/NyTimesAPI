const db = require('../models/db');

exports.getAllArticles = (req, res) => {
    const query = `
        SELECT a.id_article, a.title, a.author, a.published_date, a.url, c.name AS category
        FROM articles a
        INNER JOIN categories c ON a.id_category = c.id_category
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addArticle = (req, res) => {
    const { id_category, title, author, published_date, url } = req.body;

    const query = `
        INSERT INTO articles (id_category, title, author, published_date, url)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [id_category, title, author, published_date, url], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Article added successfully' });
    });
};

exports.updateArticle = (req, res) => {
    const { id_article } = req.params;
    const { title, author, published_date, url, id_category } = req.body;

    const query = `
        UPDATE articles 
        SET title = ?, author = ?, published_date = ?, url = ?, id_category = ?
        WHERE id_article = ?
    `;
    db.query(query, [title, author, published_date, url, id_category, id_article], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Article updated successfully' });
    });
};

exports.deleteArticle = (req, res) => {
    const { id_article } = req.params;

    const query = 'DELETE FROM articles WHERE id_article = ?';
    db.query(query, [id_article], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Article deleted successfully' });
    });
};
