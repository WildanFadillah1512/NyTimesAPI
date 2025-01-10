const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const articlesRoutes = require('./routes/articlesRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const nytRoutes = require('./routes/nytRoutes'); 

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/articles', articlesRoutes);    
app.use('/api/categories', categoriesRoutes); 
app.use('/api/favorites', favoritesRoutes);   
app.use('/api/users', usersRoutes);          
app.use('/api/nyt', nytRoutes);              

app.get('/', (req, res) => {
    res.send('Welcome to the NY Times REST API');
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

module.exports = app;
