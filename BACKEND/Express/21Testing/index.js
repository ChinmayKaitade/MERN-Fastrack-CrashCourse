const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.post("/user", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required");
  }
  res.status(201).send(`User ${name} created`);
});

module.exports = app;