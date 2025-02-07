// DOTENV configuration
require("dotenv").config();

// Import Express
const express = require("express");

// Initialize express in variable
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`Server is running on port: ${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
