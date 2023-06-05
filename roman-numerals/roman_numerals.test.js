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
  test("Check the roman generating algorithm for base 10 two digit numbers", () => {
    expect(convertDecimalToRoman(10)).toBe("X");
    expect(convertDecimalToRoman(19)).toBe("XIX");
    expect(convertDecimalToRoman(22)).toBe("XXII");
    expect(convertDecimalToRoman(74)).toBe("LXXIV");
    expect(convertDecimalToRoman(80)).toBe("LXXX");
    expect(convertDecimalToRoman(95)).toBe("XCV");
  });
  test("Check the roman generating algorithm for base 10 three digit numbers", () => {
    expect(convertDecimalToRoman(101)).toBe("CI");
    expect(convertDecimalToRoman(243)).toBe("CCXLIII");
    expect(convertDecimalToRoman(367)).toBe("CCCLXVII");
    expect(convertDecimalToRoman(489)).toBe("CDLXXXIX");
    expect(convertDecimalToRoman(609)).toBe("DCIX");
    expect(convertDecimalToRoman(976)).toBe("CMLXXVI");
  });
});
