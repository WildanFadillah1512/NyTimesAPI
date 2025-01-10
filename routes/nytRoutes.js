const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/top-stories', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;