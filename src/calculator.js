#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - squareRoot
 */

// addition: returns the sum of two numbers
function addition(a, b) {
  return a + b;
}

// subtraction: returns the difference of two numbers
function subtraction(a, b) {
  return a - b;
}

// multiplication: returns the product of two numbers
function multiplication(a, b) {
  return a * b;
}

// division: returns the quotient of two numbers; throws on division by zero
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// modulo: returns the remainder of a divided by b; throws on division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// power: returns base raised to the exponent (exponentiation)
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// squareRoot: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

// calculate: dispatches to the appropriate operation function
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

  if (!operations[operation]) {
    throw new Error(
      `Unknown operation: "${operation}". Supported: ${Object.keys(operations).join(', ')}`
    );
  }

  return operations[operation](a, b);
}

function parseNumber(value, name) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    throw new Error(`Invalid number for ${name}: "${value}"`);
  }
  return num;
}

function printUsage() {
  console.log('Usage: node calculator.js <operation> <a> [b]');
  console.log('');
  console.log('Operations:');
  console.log('  addition <a> <b>       - Add a and b');
  console.log('  subtraction <a> <b>    - Subtract b from a');
  console.log('  multiplication <a> <b> - Multiply a by b');
  console.log('  division <a> <b>       - Divide a by b');
  console.log('  modulo <a> <b>         - Remainder of a divided by b');
  console.log('  power <base> <exp>     - Raise base to the power of exp');
  console.log('  squareRoot <n>         - Square root of n');
}

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    printUsage();
    process.exit(1);
  }

  const operation = args[0];
  try {
    let result;
    if (operation === 'squareRoot') {
      const n = parseNumber(args[1], 'n');
      result = squareRoot(n);
    } else {
      if (args.length < 3) {
        printUsage();
        process.exit(1);
      }
      const a = parseNumber(args[1], 'a');
      const b = parseNumber(args[2], 'b');
      result = calculate(operation, a, b);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
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
