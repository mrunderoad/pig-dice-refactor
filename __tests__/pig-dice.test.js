import { Player } from "./../src/pig-dice.js";
import { Game } from "./../src/pig-dice.js";

describe('Player', () => {

  test('should correctly create two player objects with name, score, and tally', () => {
    let player1 = new Player("Player 1");
    let player2 = new Player("Player 2");
    expect(player1).toEqual({"name": "Player 1", "score": 0, "tally": 0});
    expect(player2).toEqual({"name": "Player 2", "score": 0, "tally": 0});
  });

  test('gets random number between 1-6', () => {
    let player1 = new Player("Player 1");
    expect(player1.getRandom()).toBeLessThanOrEqual(6)
  });

  test('Should use getRandom and modify tally of player unless result is 1, then 0 out tally if so, return number rolled', () => {
    let player1 = new Player("Player 1");
    player1.rollDice();
    player1.tally;
    expect(player1.tally).toBeLessThanOrEqual(6);
    expect(player1.tally).toBeGreaterThanOrEqual(0);
  });
});

describe('Game', () => {

  test('New game object should create two players', () => {
    let game = new Game();
    expect(game.player1).toEqual({"name": "Player 1", "score": 0, "tally":0});
    expect(game.player2).toEqual({"name": "Player 2", "score": 0, "tally": 0});
    expect(game.currentPlayer).toEqual({"name": "Player 1", "score": 0, "tally": 0});
  });


  test('Should add current tally to total score of player and zero out tally', () => {
    let game = new Game();
    game.player1.rollDice();
    game.hold();
    expect(game.player1.tally).toEqual(0);
    expect(game.player1.score).toBeLessThanOrEqual(6);
  });


  test('switches players if a 1 is rolled or if opponent holds', () => {
    let game = new Game();
    game.switchPlayer();
    expect(game.currentPlayer).toEqual({"name": "Player 2", "score": 0, "tally": 0});
  });

  test('checks for no winner', () => {
    let game = new Game();
    expect(game.checkForWinner()).toEqual("none");
  });

  test('checks if player 1 is winner', () => {
    let game = new Game();
    game.player1.score = 100;
    expect(game.checkForWinner()).toEqual("Player 1");
  });

  test('checks if player 2 is winner', () => {
    let game = new Game();
    game.player2.score = 100;
    expect(game.checkForWinner()).toEqual("Player 2");
  });

  test('should see what player is playing before switching', () => {
    let game = new Game();
    let player2 = new Player("Player 2");
    let player1 = new Player("Player 1");
    game.currentPlayer = player2
    game.switchPlayer();
    expect(game.currentPlayer).toEqual(player1);
  });
});





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
