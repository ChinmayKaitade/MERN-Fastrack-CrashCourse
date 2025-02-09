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

app.get("/get-products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product1",
      price: 35,
    },
    {
      id: 2,
      name: "Product2",
      price: 25,
    },
    {
      id: 3,
      name: "Product3",
      price: 38,
    },
    {
      id: 4,
      name: "Product4",
      price: 48,
    },
    {
      id: 5,
      name: "Product5",
      price: 40,
    },
  ];

  res.json({
    success: true,
    data: products,
    message: "Products Fetched Successfully",
  });
});

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
