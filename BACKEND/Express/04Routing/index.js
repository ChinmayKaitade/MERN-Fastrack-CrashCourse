const express = require("express");
const app = express();

const port = 3000;

// HTTP Methods --> GET, PUT, POST, UPDATE
// GET --> you can't pass data into body
app.get("/", (req, res) => {
  res.send("Welcome to Home Route");
});

// POST --> you can pass data into body
app.post("/submit", (req, res) => {
  res.send("Form Submitted Successfully!");
});

// PUT --> you can data into body
app.put("/update", (req, res) => {
  res.send("Data Updated Successfully!");
});

// DELETE --> you can't pass data(pass request id from URL)
app.delete("/delete", (req, res) => {
  res.send("Data Deleted Successfully!");
});

// Route Parameters and Query Strings ✅
// Route Parameters ✅
// app.get("/product/:id", (req, res) => {
//   console.log(`Fetching details for user ID: ${req.params.id}`);
//   res.send(`User ID: ${req.params.id}`);
// });

app.get("/product/:id/:name", (req, res) => {
  // const id = req.params.id;
  // const name = req.params.name;

  const { id, name } = req.params;
  console.log(`Product Id is ${id} and Product Name is ${name}`);
  return res.send(`Product Id is ${id} and Product Name is ${name}`);
});

// Query Strings ✅
app.get("/search", (req, res) => {
  // grab title from query
  const { title, price } = req.query;
  return res.send(`You Searched for ${title} with price ${price}`);
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}`);
});
