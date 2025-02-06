// INTERNAL MODULES/ INBUILT MODULES 🚀❤️‍🔥

// 1. PATH Module ✅
const path = require("path");
const extentionName = path.extname("index.js");
console.log(extentionName);
console.log(path.join(__dirname, "index.js"));

// 2. OS Module
const os = require("os");
console.log(os.userInfo());
console.log(os.version());

// 3. FS Module ✅
const fs = require("fs");

// create folder (CREATE)
fs.mkdir("test", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder created successfully");
  }
});

// read folder/file data (READ)
fs.readFile("Data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// update file data (UPDATE)
fs.writeFile(
  "Data.txt",
  "Please Star Code Repository if You like the NodeJS Practice Code",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File updated successfully");
    }
  }
);

// append text to existing file
fs.appendFile("Data.txt", "\nHello this is append text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Text appended successfully");
  }
});

// 4. HTTP Module ✅
const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello World from NodeJS...</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
