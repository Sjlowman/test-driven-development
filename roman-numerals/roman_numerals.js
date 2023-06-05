function convertDecimalToRoman(num) {
  if (num === undefined || typeof num !== "number")
    throw new Error("Number to convert is required");
  const romanPatternArray = [
    "",
    "l",
    "ll",
    "lll",
    "lm",
    "m",
    "ml",
    "mll",
    "mlll",
    "lu",
    "u",
  ];
  const romanDigitLetters = {
    thouLower: "M",
    thouMid: "V",
    hundLower: "C",
    hundMid: "D",
    hundUpper: "M",
    tensLower: "X",
    tensMid: "L",
    tensUpper: "C",
    unitLower: "I",
    unitMid: "V",
    unitUpper: "X",
  };

  const unitsDecimal = num % 10;
  const unitValue = unitsDecimal;
  const tensDecimal = (num - unitsDecimal) % 100;
  const tensValue = tensDecimal / 10;
  const hundredsDecimal = (num - unitsDecimal - tensDecimal) % 1000;
  const hundValue = hundredsDecimal / 100;
  const thousandsDecimal = Math.floor(num / 1000);
  const thouValue = thousandsDecimal;

  const unitString = romanPatternArray[unitValue];
  let romanUnitString = unitString
    .replace(/l/g, romanDigitLetters.unitLower)
    .replace(/m/g, romanDigitLetters.unitMid)
    .replace(/u/g, romanDigitLetters.unitUpper);

  const tensString = romanPatternArray[tensValue];
  let romanTensString = tensString
    .replace(/l/g, romanDigitLetters.tensLower)
    .replace(/m/g, romanDigitLetters.tensMid)
    .replace(/u/g, romanDigitLetters.tensUpper);

  const hundString = romanPatternArray[hundValue];
  let romanHundString = hundString
    .replace(/l/g, romanDigitLetters.hundLower)
    .replace(/m/g, romanDigitLetters.hundMid)
    .replace(/u/g, romanDigitLetters.hundUpper);

  const thouString = romanPatternArray[thouValue];
  let romanThouString = thouString
    .replace(/l/g, romanDigitLetters.thouLower)
    .replace(/m/g, romanDigitLetters.thouMid)
    .replace(/u/g, romanDigitLetters.thouUpper);
  return romanThouString + romanHundString + romanTensString + romanUnitString;
}

module.exports = convertDecimalToRoman;
