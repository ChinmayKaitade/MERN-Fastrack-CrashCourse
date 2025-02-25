import express from "express";
import { shortenerRoutes } from "./routes/shortener.routes.js";
const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views", "./views");

//? In Express.js a template engine is a tool that lets you embedded dynamic content into HTML files and render them on the server before ending them to the client. It allows you to create reusable template, making it easier to generate dynamic web pages with minimal code.

// express router
// app.use(router);

app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
