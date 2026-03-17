const {
  addition,
  subtraction,
  multiplication,
  division,
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

  test("throws for unsupported operation", () => {
    expect(() => calculate("modulo", 5, 2)).toThrow(
      "Invalid operation. Use one of: addition, subtraction, multiplication, division."
    );
  });
});
