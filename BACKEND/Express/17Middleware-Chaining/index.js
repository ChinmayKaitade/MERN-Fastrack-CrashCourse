const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  req.customProperty = "Hello from Middleware 1";
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  console.log(req.customProperty); // Access property set by Middleware 1
  next();
});

// Route Handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
