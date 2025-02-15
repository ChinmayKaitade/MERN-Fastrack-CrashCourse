import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log(chalk.green("\n 1: Add a Task"));
  console.log(chalk.blue("\n 2: View Tasks"));
  console.log(chalk.red("\n 3: Exit"));

  rl.question("Choose an Option: ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter the Task:", (task) => {
      todos.push(task);
      console.log(chalk.green("\n Task added:"), task);

      showMenu();
    });
  } else if (option === "2") {
    console.log(chalk.yellow("\n Your Todo List"));
    todos.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    });

    showMenu();
  } else if (option === "3") {
    console.log(chalk.magenta("Good Bye User :-)"));
    rl.close();
  } else {
    console.log(chalk.cyan("Invalid Options. Please try again later..."));

    showMenu();
  }
};

showMenu();
