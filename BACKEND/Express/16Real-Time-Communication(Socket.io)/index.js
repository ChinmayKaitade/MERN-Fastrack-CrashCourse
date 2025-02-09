const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

io.on("connection", (socket) => {
  console.log(`New User Connected: ${socket.id}`);
  socket.emit("message", "Welcome to Chat!");
});

server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
