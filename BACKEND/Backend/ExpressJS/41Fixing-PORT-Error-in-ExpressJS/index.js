import express from "express";
const app = express();

const PORT = process.env.PORT || 4002;

app.get("/", (req, res) => {
  return res.send("<h1>Homepage Rendered...</h1>");
});

app.get("/about", (req, res) => {
  return res.send("<h1>About Page Rendered...</h1>");
});

app.get("/contact", (req, res) => {
  return res.send("<h1>Contact Page Rendered...</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
