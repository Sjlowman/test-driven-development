module.exports = calculateScore;

function calculateScore(str) {
  const scoreArray = str.split(" ");
  let numericScoreArray = scoreArray.map((frame) =>
    convertToNumericFrameScore(frame)
  );
  return numericScoreArray.reduce((acc, curr) => acc + curr, 0);
}
function convertToNumericFrameScore(str) {
  return str === "X"
    ? 10
    : str.substring(2, 1) === "/"
    ? 10
    : Number(str.substring(0, 1)) + Number(str.substring(2, 1));
}
