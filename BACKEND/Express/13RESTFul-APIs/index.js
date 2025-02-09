const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Monitor",
    price: 1000,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 2000,
  },
  {
    id: 3,
    name: "CPU",
    price: 3000,
  },
  {
    id: 4,
    name: "Laptop",
    price: 4000,
  },
  {
    id: 5,
    name: "Mouse",
    price: 1400,
  },
];

// READ PRODUCTS ✅
// fetch all products
app.get("/api/products", async (req, res) => {
  await res.status(200).json({
    success: true,
    data: products,
    message: "Products Fetched Successfully",
  });
});

// fetch single product
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => {
    return product.id === Number(id);
  });

  // if product not found
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "No Products Found",
    });
  }

  // if product found
  res.status(200).json({
    success: true,
    data: product,
    message: "Single Product Fetched Successfully",
  });
});

// UPDATE PRODUCT ✅
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find((product) => {
    return product.id === Number(id);
  });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "No Products Found",
    });
  }

  if (name) {
    product.name = name;
  }

  if (price) {
    product.price = price;
  }

  return res.status(200).json({
    success: true,
    data: product,
    message: "Product updated Successfully",
  });
});

// DELETE PRODUCT ✅
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const productList = products.filter((product) => product.id !== Number(id));

  return res.status(200).json({
    success: true,
    data: productList,
    message: "Product deleted Successfully",
  });
});

// CREATE PRODUCT ✅
app.post("/api/create-product", (req, res) => {
  const { id, name, price } = req.body;

  const newProduct = { id, name, price };
  products.push(newProduct);

  return res.status(201).json({
    success: true,
    data: newProduct,
    message: "Product created Successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
