import express from "express";
import { shortenerRoutes } from "./routes/shortener.routes.js";
const app = express();

const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// express router
// app.use(router);

app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
