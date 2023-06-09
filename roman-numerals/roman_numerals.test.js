const convertDecimalToRoman = require("./roman_numerals");

describe("Test Roman Numerals", () => {
  test("Check the pipes", () => {
    expect(convertDecimalToRoman(1)).toBe("I");
  });
  test("Error if called without an arg", () => {
    expect(convertDecimalToRoman).toThrow("Number to convert is required");
  });
  test("Error if called with non-numeric", () => {
    expect(() => {
      convertDecimalToRoman("45");
    }).toThrow("Number to convert is required");
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
  test("Check the roman generating algorithm for base 10 four digit numbers up to 3000", () => {
    expect(convertDecimalToRoman(1345)).toBe("MCCCXLV");
    expect(convertDecimalToRoman(2456)).toBe("MMCDLVI");
  });
  test("Check the roman generating algorithm for cases with 0s to make sure there are no extra spaces etc", () => {
    expect(convertDecimalToRoman(100)).toBe("C");
    expect(convertDecimalToRoman(101)).toBe("CI");
    expect(convertDecimalToRoman(2002)).toBe("MMII");
    expect(convertDecimalToRoman(3000)).toBe("MMM");
  });
});
