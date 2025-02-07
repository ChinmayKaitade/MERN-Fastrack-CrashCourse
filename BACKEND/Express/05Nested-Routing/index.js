const express = require("express");
const app = express();

// import authRoutes
const authRoutes = require("./routes/authRoutes");
const port = 5000;

app.use("/api", authRoutes);
// app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Home Route");
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}`);
});
