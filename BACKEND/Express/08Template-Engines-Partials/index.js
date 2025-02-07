const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "This is a dynamic text using EJS template",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
