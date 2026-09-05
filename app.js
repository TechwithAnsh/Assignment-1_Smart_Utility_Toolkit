const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

const number = 10;

if (isEven(number)) {
  logger(number + " is an even number");
} else {
  logger(number + " is an odd number");
}
