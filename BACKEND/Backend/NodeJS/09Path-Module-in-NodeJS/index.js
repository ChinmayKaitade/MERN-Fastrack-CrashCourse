const path = require("path");

//? __filename and __dirname
console.log("File Name:", __filename);
console.log("Directory Name:", __dirname);

//? school folder/students/data.txt
const filePath = path.join("folder", "students", "data.txt");
console.log("File Path:", filePath);

//? other methods
const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const seperatorName = path.sep;

console.log({
  parseData,
  resolvedPath,
  extname,
  basename,
  dirname,
  seperatorName,
});
