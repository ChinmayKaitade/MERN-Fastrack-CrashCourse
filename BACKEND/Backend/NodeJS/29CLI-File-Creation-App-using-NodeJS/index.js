import readline from "readline";
import fs from "fs";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your Filename: ", (filename) => {
    rl.question("Enter the content for your file: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.error(
            chalk.red(`Error while writing the file, ${err.message}`)
          );
        } else {
          console.log(chalk.green(`File ${filename}.txt created Successfully`));
        }

        rl.close();
      });
    });
  });
};

fileCreation();
