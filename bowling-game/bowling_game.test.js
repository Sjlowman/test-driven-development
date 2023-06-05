const bowlingGame = require("./bowling_game");

test("check transaction processing when empty", () => {
  expect(processTransactions([])).toEqual([]);
});
