const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const articlesRoutes = require("./routes/articlesRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const usersRoutes = require("./routes/usersRoutes");
const nytRoutes = require("./routes/nytRoutes");

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

dotenv.config();

app.use("/api/articles", articlesRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/nyt", nytRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the NY Times REST API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});
