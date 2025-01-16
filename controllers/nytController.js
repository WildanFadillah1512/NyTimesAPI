const axios = require('axios');

exports.getTopStories = async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopStoriesByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchArticles = async (req, res) => {
    const { query } = req.query;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.searchArticlesByDate = async (req, res) => {
    const { query, start_date, end_date } = req.query;

    try {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_API_KEY};`
        const dateRange = start_date && end_date ? `&begin_date=${start_date}&end_date=${end_date}` : '';
        const response = await axios.get(url + dateRange);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMostPopularArticles = async (req, res) => {
    const { period } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMostSharedArticles = async (req, res) => {
    const { period } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostshared/v2/shared/${period}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Book Reviews
exports.getBookReviews = async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// const getBookReviews = async (req, res) => {
//     const { query } = req.query;
//     try {
//         const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${query}.json?api-key=${process.env.NYT_API_KEY}`);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


exports.getMovieReviews = async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArticlesBySection = async (req, res) => {
    const { section } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArticleByUrl = async (req, res) => {
    const { url } = req.params;

    try {
        const response = await axios.get(`https://api.nytimes.com/svc/news/v3/content.json?url=${url}&api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};