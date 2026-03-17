#!/usr/bin/env node

/**
 * Supported calculator operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - squareRoot
 */

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

function calculate(operation, a, b) {
  const operations = {
    addition,
    subtraction,
    multiplication,
    division,
    modulo,
    power,
    squareRoot,
  };

  const handler = operations[operation];
  if (!handler) {
    throw new Error(
      "Invalid operation. Use one of: addition, subtraction, multiplication, division, modulo, power, squareRoot."
    );
  }

  return handler(a, b);
}

function parseNumber(value, name) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid ${name}: "${value}". Please provide a valid number.`);
  }
  return parsed;
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <number1> <number2>");
  console.log(
    "Operations: addition, subtraction, multiplication, division, modulo, power, squareRoot"
  );
}

if (require.main === module) {
  const [operation, rawA, rawB] = process.argv.slice(2);

  if (!operation || rawA === undefined || rawB === undefined) {
    printUsage();
    process.exit(1);
  }

  try {
    const a = parseNumber(rawA, "number1");
    const b = parseNumber(rawB, "number2");
    const result = calculate(operation, a, b);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
};
