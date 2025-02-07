const sayHello = (req, res) => {
  res.send("Hello From Auth Controllers");
};

const getData = (req, res) => {
  res.send("Data Saved...");
};

module.exports = {sayHello, getData};
