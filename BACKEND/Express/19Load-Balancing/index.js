const express = require("express");
const app = express();
const port = 5000;

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 20 * 1000, // 20 seconds
  max: 2, // limit each ip to 2 requests per windowMs
  message:
    "Bhai 20 Seconds Ke Baad Try Maarna | Too many requests from this IP, please try again after 20 seconds.",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("<h1><center>Homepage Here</center></h1>");
});

app.get("/api/secureData", (req, res) => {
  res.json({
    message: "This is a Secure Data",
    data: {
      name: "Chinmay Kaitade",
      YtChannel: "Coder Canvas",
      password: "123456",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
