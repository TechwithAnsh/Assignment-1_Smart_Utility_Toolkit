const crypto = require("crypto");

console.log("🎲 Dice Rolling Started...");

for (let i = 1; i <= 5; i++) {
  const dice = crypto.randomInt(1, 7);
  console.log(`Dice Roll ${i}: ${dice}`);
}

console.log("🎲 Dice Rolling Completed!");
