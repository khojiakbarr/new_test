// index.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/myapp"; // docker-compose uchun "mongo" host

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js + MongoDB!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
