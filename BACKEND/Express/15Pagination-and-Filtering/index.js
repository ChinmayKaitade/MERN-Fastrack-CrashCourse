const express = require("express");
const app = express();
const port = 4000;
const morgan = require("morgan");

// app.use(morgan("combined"))
// app.use(morgan("tiny"))
// app.use(morgan("short"))
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

// PAGINATION AND FILTERING ✅
// Pagination
app.get("/api/products", (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default values
  const products = [
    /* Array of products */
  ];

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + Number(limit);

  const paginatedProducts = products.slice(startIndex, endIndex);
  res.json({ page, limit, products: paginatedProducts });
});

// Filtering
app.get("/api/products", (req, res) => {
  const { category, priceRange } = req.query;
  let products = [
    /* Array of products */
  ];

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (priceRange) {
    const [min, max] = priceRange.split("-").map(Number);
    products = products.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  res.json(products);
});

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
