const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Homepage Rendered...</h1>");
    res.end();
  }

  if (req.url === "/source-code") {
    res.write("<h1>Source Code Page Rendered...</h1>");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("<h1Contact Page Rendered...</h1>");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
