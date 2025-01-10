const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config(); 

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.error(`Server error: ${error.message}`);
    process.exit(1);
});
