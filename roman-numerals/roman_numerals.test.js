const convertDecimalToRoman = require("./roman_numerals");

describe("Test Roman Numerals", () => {
  test("Check the pipes", () => {
    expect(convertDecimalToRoman(1)).toBe("I");
  });
  test("Check the roman generating algorithm for base 10 units", () => {
    expect(convertDecimalToRoman(2)).toBe("II");
    expect(convertDecimalToRoman(3)).toBe("III");
    expect(convertDecimalToRoman(4)).toBe("IV");
    expect(convertDecimalToRoman(5)).toBe("V");
    expect(convertDecimalToRoman(6)).toBe("VI");
    expect(convertDecimalToRoman(7)).toBe("VII");
    expect(convertDecimalToRoman(8)).toBe("VIII");
    expect(convertDecimalToRoman(9)).toBe("IX");
  });
});
