import express from "express";
// import { PORT } from "./env.js";
const app = express();
import path from "path";

const PORT = process.env.PORT || 4002;

//absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My Username is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formattedSlug = req.params.slug.replace(/-/g, " ");

  res.send(
    `<h1>My Username is ${req.params.username} and Slug is ${formattedSlug}</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
