import { Player } from "./../src/pig-dice.js";
import { Game } from "./../src/pig-dice.js";

describe('Player', () => {

  test('should correctly create a player object with name, score, and tally', () => {
    const playerOne = new Player("playerOne");
    expect(playerOne).toEqual({"name": "playerOne", "score": 0, "tally": 0})
  });

  test('Should use getRandom and modify tally of player unless result is 1, then 0 out tally if so, return number rolled', () => {
    const playerOne = new Player("playerOne");
    playerOne.rollDice();
    playerOne.tally;
    expect(playerOne.tally).toBeLessThanOrEqual(6);
    expect(playerOne.tally).toBeGreaterThanOrEqual(0);
  });
});

describe('Game', () => {

  test('Should add current tally to total score of player and zero out tally', () => {
    const playerOne = new Player("playerOne");
    const game = new Game();
    playerOne.rollDice();
    game.hold();
    expect(playerOne.tally).toEqual(0);
    expect(playerOne.score).toBeLessThanOrEqual(6);
  });
});

  // test('', () => {

  // });

  // test('', () => {

  // });





// Describe: Game

// Test: "New game object should create two players and current player set to player 1."
// Code:
// let game = new Game();
// game.player1.name;
// game.player2.name;
// game.currentPlayer;
// Expected Output: "Player 1", "Player 2", player 1

// Describe: Player

// Test: "New player object should have properties name and current score and turn tally initialized to 0."
// Code:
// let player1 = new Player("Player 1");
// player1.name;
// player1.score;
// player1.turnTally;
// Expected Output: "Player 1", 0, 0

// Describe: Game.prototype.getRandom()

// Test: "Should return random integer between 1 and 6."
// Code:
// let number = game.rollDice();
// number;
// Expected Output: Number between 1 and 6:

// Describe: Player.prototype.rollDice()

// Test: "Should use getRandom and modify tally of player unless result is 1, then 0 out tally if so, return number rolled."
// Code:
// player1.rollDice();
// player1.tally
// Expected Output: random number between 1-6, that number+tally

// Describe: Player.prototype.hold()
// Test: "Should add current tally to total score of player and zero out tally."
// Code:
// player1.hold()
// player1.tally;
// player1.score;
// Expected Output: 0, ?

// Describe: Game.prototype.switchPlayer()

// Test: "Should switch current player to other player2."
// Code:
// game.switchPlayer();
// game.currentPlayer; Expected Output: "Player 2"

// Describe: Game.prototype.checkForWinner()

// Test: "Checks players total scores for at least 100 Returns winner or none"
// Code:
// game.checkForWinner()

// Expected Output: "none"
