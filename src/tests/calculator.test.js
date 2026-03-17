'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(addition(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(addition(-3, -7)).toBe(-10);
  });

  test('adds decimals', () => {
    expect(addition(1.5, 2.5)).toBeCloseTo(4);
  });
});

describe('subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test('subtracts resulting in a negative', () => {
    expect(subtraction(3, 10)).toBe(-7);
  });

  test('subtracts decimals', () => {
    expect(subtraction(5.5, 2.5)).toBeCloseTo(3);
  });
});

describe('multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiplication(45, 2)).toBe(90);
  });

  test('multiplies by zero', () => {
    expect(multiplication(100, 0)).toBe(0);
  });

  test('multiplies two negative numbers', () => {
    expect(multiplication(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiplication(5, -3)).toBe(-15);
  });
});

describe('division', () => {
  test('divides two positive numbers', () => {
    expect(division(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal', () => {
    expect(division(7, 2)).toBeCloseTo(3.5);
  });

  test('throws on division by zero', () => {
    expect(() => division(10, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('modulo', () => {
  test('returns remainder of 10 modulo 3', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns 0 when modulo divides evenly', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns remainder with negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('power (exponentiation)', () => {
  test('raises 2 to the power of 10', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('raises a number to the power of 0', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative power', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });
});

describe('squareRoot (square root)', () => {
  test('returns the square root of 9', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns the square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns the square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('throws an error for the square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow(
      'Square root of a negative number is not allowed'
    );
  });
});

describe('calculate dispatcher', () => {
  test('dispatches addition', () => {
    expect(calculate('addition', 2, 3)).toBe(5);
  });

  test('dispatches subtraction', () => {
    expect(calculate('subtraction', 10, 4)).toBe(6);
  });

  test('dispatches multiplication', () => {
    expect(calculate('multiplication', 45, 2)).toBe(90);
  });

  test('dispatches division', () => {
    expect(calculate('division', 20, 5)).toBe(4);
  });

  test('dispatches modulo', () => {
    expect(calculate('modulo', 10, 3)).toBe(1);
  });

  test('dispatches power', () => {
    expect(calculate('power', 2, 10)).toBe(1024);
  });

  test('throws on unknown operation', () => {
    expect(() => calculate('unknown', 1, 2)).toThrow('Unknown operation');
  });
});
