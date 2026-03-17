const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

describe("calculator basic operations", () => {
  describe("addition", () => {
    test("adds two positive numbers", () => {
      expect(addition(2, 3)).toBe(5);
    });

    test("adds negative and decimal numbers", () => {
      expect(addition(-4, 1.5)).toBeCloseTo(-2.5);
    });
  });

  describe("subtraction", () => {
    test("subtracts two positive numbers", () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test("subtracts to a negative result", () => {
      expect(subtraction(3, 9)).toBe(-6);
    });
  });

  describe("multiplication", () => {
    test("multiplies two positive numbers", () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test("multiplies with zero", () => {
      expect(multiplication(99, 0)).toBe(0);
    });
  });

  describe("division", () => {
    test("divides two positive numbers", () => {
      expect(division(20, 5)).toBe(4);
    });

    test("divides and returns decimal result", () => {
      expect(division(7, 2)).toBeCloseTo(3.5);
    });

    test("throws for division by zero", () => {
      expect(() => division(8, 0)).toThrow("Division by zero is not allowed.");
    });
  });

  describe("modulo", () => {
    test("returns remainder for positive integers", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("returns zero when divisible", () => {
      expect(modulo(12, 4)).toBe(0);
    });
  });

  describe("power", () => {
    test("raises base to positive exponent", () => {
      expect(power(2, 3)).toBe(8);
    });

    test("handles fractional exponent", () => {
      expect(power(9, 0.5)).toBeCloseTo(3);
    });
  });

  describe("squareRoot", () => {
    test("returns square root for non-negative number", () => {
      expect(squareRoot(9)).toBe(3);
    });

    test("throws for negative input", () => {
      expect(() => squareRoot(-1)).toThrow(
        "Square root of a negative number is not allowed."
      );
    });
  });
});

describe("calculate dispatcher", () => {
  test("dispatches addition", () => {
    expect(calculate("addition", 2, 3)).toBe(5);
  });

  test("dispatches subtraction", () => {
    expect(calculate("subtraction", 10, 4)).toBe(6);
  });

  test("dispatches multiplication", () => {
    expect(calculate("multiplication", 45, 2)).toBe(90);
  });

  test("dispatches division", () => {
    expect(calculate("division", 20, 5)).toBe(4);
  });

  test("dispatches modulo", () => {
    expect(calculate("modulo", 10, 3)).toBe(1);
  });

  test("dispatches power", () => {
    expect(calculate("power", 2, 3)).toBe(8);
  });

  test("dispatches squareRoot", () => {
    expect(calculate("squareRoot", 9, 0)).toBe(3);
  });

  test("throws for unsupported operation", () => {
    expect(() => calculate("average", 5, 2)).toThrow(
      "Invalid operation. Use one of: addition, subtraction, multiplication, division, modulo, power, squareRoot."
    );
  });
});
