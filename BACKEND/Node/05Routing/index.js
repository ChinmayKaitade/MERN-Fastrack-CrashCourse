const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // STATIC ROUTING ✅
  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // } else if (req.url === "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // } else if (req.url === "/contact") {
  //   fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }

  // DYNAMIC ROUTING ✅
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.end("<h1><center>404 Not Found!</center></h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
