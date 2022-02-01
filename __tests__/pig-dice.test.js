import { Player } from "./../src/pig-dice.js";

describe('Player', () => {

  test('should correctly create a player object with name, score, and tally', () => {
    const playerOne = new Player("playerOne");
    expect(playerOne).toEqual({"name": "playerOne", "score": 0, "tally": 0})
  });
});
