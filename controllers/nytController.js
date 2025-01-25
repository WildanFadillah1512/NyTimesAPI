const axios = require('axios');

exports.getTopStories = async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTopStoriesByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.searchArticles = async (req, res) => {
    const { query } = req.query;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.searchArticlesByDate = async (req, res) => {
    const { query, begin_date, end_date } = req.query;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${begin_date}&end_date=${end_date}&api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMostSharedArticles = async (req, res) => {
    const { period } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${period}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBookReviews = async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${query}&api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getArticlesBySection = async (req, res) => {
    const { section } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};