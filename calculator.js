const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (operation === "add") {
  console.log("Result:", num1 + num2);
} else if (operation === "subtract") {
  console.log("Result:", num1 - num2);
} else {
  console.log("Invalid operation!");
  console.log("Use: add or subtract");
}
