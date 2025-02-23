import express from "express";
// import { PORT } from "./env.js";
const app = express();
import path from "path";

const PORT = process.env.PORT || 4002;

//absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.send("OK");
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
