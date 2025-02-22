import express from "express";
// import { PORT } from "./env.js";
const app = express();
import path from "path";

const PORT = process.env.PORT || 4002;

// console.log(__dirname);
// console.log(__filename);

//absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  // console.log(import.meta.dirname);
  // console.log(import.meta.url);

  // const __filename = new URL(import.meta.url).pathname;
  // console.log(__filename);

  // return res.send("<h1>Homepage Rendered...</h1>");

  const homePagePath = path.join(import.meta.dirname, "public", "index.html");

  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
