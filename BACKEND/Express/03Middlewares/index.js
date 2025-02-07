// Understanding Middlewares ✅

// Import Express
const express = require("express");

//Initializing express in variable
const app = express();

// Setting up port
const port = 5000;

// Middleware ✅
// app.use() --> is used to mount the middleware function
// app.use((req, res, next) => {
//   console.log("Middleware Executed Successfully...");
//   next();
// });

// verifyMiddleware (custom middleware)
const verifyMiddleware = (req, res, next) => {
  console.log("User Verified Successfully...");
  next();
};

// router level middlewares
app.use("/user", verifyMiddleware, (req, res) => {
  res.send("Welcome to the User Page!");
});

app.get("/", (req, res) => {
  res.send(`App is running on Port ${port}`);
});

// Listening server on port
app.listen(port, () => {
  console.log(`Server is listening on Port:${port}`);
});

// Build-in Middlewares ✅
// app.use(express.json()); --> `json` converts all data into JSON format
// app.use(express.urlencoded); --> `urlencoded` is used for accepting url data
// app.use(express.static("public")); --> `static` is used for dealing with static files
