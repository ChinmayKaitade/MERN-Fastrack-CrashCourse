// Import modules required to build server
const http = require("http");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// configuration for port
const PORT = process.env.PORT || 8000;

// createServer using http module
const server = http.createServer((req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 500,
    },
  ];

  // endpoints
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

// Listen the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
