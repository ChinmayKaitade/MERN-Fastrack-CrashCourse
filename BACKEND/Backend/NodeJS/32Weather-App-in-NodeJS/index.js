import https from "https";
import readline from "readline/promises";
import chalk from "chalk";

//? Open Weather API
const API_KEY = `42bc5a62f4f5d4ca6ee92ae8151ecc8c`;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response) {
      throw new Error("City Not Found. Please check the city name!");
    }

    // converts response into JSON format
    const weatherData = await response.json();

    console.log(chalk.green.bgRed.bold("\nWeather Information:"));
    console.log(chalk.blue(`City: ${weatherData.name}`));
    console.log(chalk.magenta(`Temperature: ${weatherData.main.temp} deg. C`));
    console.log(
      chalk.blue(`Description: ${weatherData.weather[0].description}`)
    );
    console.log(chalk.blue.magenta(`Humidity: ${weatherData.main.humidity}%`));
    console.log(chalk.blue(`Wind Speed: ${weatherData.wind.speed}m/s\n`));
  } catch (error) {
    console.log(error);
  }
};

const city = await rl.question("Enter a city name to get its weather:");
await getWeather(city);
rl.close();
