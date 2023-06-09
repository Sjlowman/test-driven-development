const calculateScore = require("./bowling_game");

describe("Test bowling game scoring", () => {
  test("Check the pipes", () => {
    expect(calculateScore("X")).toBe(10);
  });
  test("Check longer scores of just X", () => {
    expect(calculateScore("X X X")).toBe(30);
  });
  test("Check scores with spares and number combinations", () => {
    expect(calculateScore("X 3/ 32")).toBe(25);
  });
});
