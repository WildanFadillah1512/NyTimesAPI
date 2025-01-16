const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error(`Server error: ${error.message}`);
  process.exit(1);
});
