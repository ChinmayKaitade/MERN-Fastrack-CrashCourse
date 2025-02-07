const express = require("express");
const app = express();

const port = 4000;

// products array
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with advanced optical sensor.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    description: "Over-ear Bluetooth headphones with noise-canceling feature.",
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Fitness tracker and smartwatch with heart rate monitor.",
    category: "Wearables",
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Adjustable laptop stand for ergonomic comfort.",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    category: "Gaming",
  },
];

app.get("/api/products", (req, res) => {
  // res.send(products);
  res.status(200).json({
    success: true,
    data: products,
    message: "Product Data Fetched Successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
