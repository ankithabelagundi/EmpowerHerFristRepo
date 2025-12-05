const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds to countdown: ", (answer) => {
  let remaining = parseInt(answer, 10);

  if (isNaN(remaining) || remaining <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }
  const timer = setInterval(() => {
    console.log(`Time left: ${remaining} seconds`);
    remaining--;

    if (remaining < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  setTimeout(() => {
    process.stdin.on("data", (data) => {
      const key = data.toString().trim().toLowerCase();
      if (key === "s") {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
      }
    });
  }, 500);
});