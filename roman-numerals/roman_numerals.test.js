const convertDecimalToRoman = require("./roman_numerals");

describe("Test Roman Numerals", () => {
  test("Check the pipes", () => {
    expect(convertDecimalToRoman(1)).toBe("I");
  });
});
