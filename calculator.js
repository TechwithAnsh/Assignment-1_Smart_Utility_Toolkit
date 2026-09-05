const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (operation === "add") {
    console.log("Result:", num1 + num2);
} else if (operation === "subtract") {
    console.log("Result:", num1 - num2);
} else if (operation === "multiply") {
    console.log("Result:", num1 * num2);
} else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Cannot divide by zero!");
    } else {
        console.log("Result:", num1 / num2);
    }
} else {
    console.log("Invalid operation!");
    console.log("Use: add, subtract, multiply or divide");
}
