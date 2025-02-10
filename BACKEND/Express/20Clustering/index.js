const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process is running on PID: ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Worker ${process.pid} is handling this request`);
  });

  app.listen(3000, () =>
    console.log(`Server running on port 3000 with PID: ${process.pid}`)
  );
}