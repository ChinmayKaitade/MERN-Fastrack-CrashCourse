import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = `b3689aa857b48a471ab188bc`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    /* Maths Formula */
    //? amount = 90;
    //* ex.INR
    //? currency = inr;
    //? 90usd = how much `inr`
    //? 1usd = 84.9667 * inr
    //? 90usd = x
    //! 90 * 84.9667
    const convertCurrency = (amount, rate) => {
      return (amount * rate).toFixed(2);
    };

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency (e.g. INR, EUR, NPR): ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];

          if (rate) {
            console.log(
              chalk.blue.bgRed.bold(
                `${amount} USD is Approximately ${convertCurrency(
                  amount,
                  rate
                )} ${currency}`
              )
            );
          } else {
            console.log(`Invalid Currency Code!`);
          }
        }
      );
    });
  });
});
