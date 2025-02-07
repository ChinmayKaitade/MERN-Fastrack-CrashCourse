const express = require("express");
const app = express();
const port = 4000;

// importing express-ejs-layout
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", "./views");

// express-ejs-layout middleware
app.use(expressLayouts);
app.set("layout", "layout");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "This is a dynamic text using EJS template",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
