import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import AI from "./ai.js";


const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//buttons
const spawnBtnPlayer = document.getElementById("spawn-btn-player");
const spawnBtnAI = document.getElementById("spawn-btn-ai")
const playAgain = document.getElementById("play-again")
const winMessage = document.getElementById("win-message")

const playerOneSpawnX = 285; // Board.gameFieldX + (Tile.size * 1.5), 
const playerOneSpawnY = 175; // Board.gameFieldY + (Tile.size * 1.5)
const playerTwoSpawnX = 935; // Board.mapWidth + (Tile.size * 2.7)
const playerTwoSpawnY = 675; // Board.mapHeight + (Tile.size / 2)
const aiSpawnX = 825; // Board.mapWidth + Tile.size / 2
const aiSpawnY = 625; // Board.mapHeight - Tile.size / 2

playAgain.style.display = "none";
winMessage.style.display = "none";

spawnBtnPlayer.addEventListener("click", () => {
  startPlayerGame();
  clearButtons();
})

spawnBtnAI.addEventListener("click", () => {
  startAiGame();
  clearButtons();
})

playAgain.addEventListener('click', () => {
  playerTwo instanceof AI ? startAiGame() : startPlayerGame();
  clearButtons();
})


let playerOne;
let playerTwo;
let board;

function clearButtons() {
  [playAgain, winMessage, spawnBtnPlayer, spawnBtnAI].forEach(el => el.style.display = "none");
}

function endGame(winner) {
  winMessage.innerText = `${winner} wins!`;
  winMessage.style.display = "block";
  spawnBtnPlayer.style.display = "block";
  spawnBtnAI.style.display = "block";
  playAgain.style.display = "block";
  Board.stopTimer();
}

function localAnimate(player1, player2, board) {

  window.requestAnimationFrame(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (Board.gameover && player1.alive && player2.alive) {
      board.draw();
      endGame('draw');
      return;
    }

    board.draw();

    player1.checkBoundary();
    player2.checkBoundary();

    player1.alive && player1.draw();
    player2.alive && player2.draw();

    if (!player1.alive && !player2.alive) {
      endGame('draw');
      return;
    }

    if (!player1.alive) {
      player2.draw();
      endGame('Blue');
      return;
    }

    if (!player2.alive) {
      player1.draw();
      endGame('Red');
      return;
    }


    localAnimate(player1, player2, board);
  });
}

function startPlayerGame() {

  board && board.reset();
  playerOne && playerOne.reset();
  playerTwo && playerTwo.reset();

  board = undefined;
  playerOne = undefined;
  playerTwo = undefined;

  board = new Board();
  playerOne = new Player(playerOneSpawnX, playerOneSpawnY)
  playerTwo = new Playertwo(playerTwoSpawnX, playerTwoSpawnY)
  Board.startTimer();
  playerOne.currentPlace.occupied = true;
  playerTwo.currentPlace.occupied = true;
  console.log(playerOne, playerTwo)

  localAnimate(playerOne, playerTwo, board);
}


function aiAnimate(player1, ai, board) {
  window.requestAnimationFrame(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (Board.gameover && player1.alive && ai.alive) {
      board.draw();
      endGame('draw');
    }

    board.draw();

    player1.checkBoundary();
    ai.checkBoundary();

    player1.alive && player1.draw();
    ai.alive && ai.draw();
    ai.makeMove();
    ai.makeMove();
    ai.break();

    if (!player1.alive && !ai.alive) {
      endGame('draw');
      return;
    }

    if (!player1.alive) {
      ai.draw();
      endGame('Rambo');
      return;
    }

    if (!ai.alive) {
      player1.draw();
      endGame('Player');
      return;
    }


    aiAnimate(player1, ai, board);
  });
}

function startAiGame() {

  board && board.reset();
  playerOne && playerOne.reset();
  playerTwo && playerTwo.reset();

  board = undefined;
  playerOne = undefined;
  playerTwo = undefined;

  board = new Board();
  playerOne = new Player(playerOneSpawnX, playerOneSpawnY)
  playerTwo = new AI(aiSpawnX, aiSpawnY)

  Board.startTimer();

  playerOne.currentPlace.occupied = true;
  playerTwo.currentPlace.occupied = true;

  aiAnimate(playerOne, playerTwo, board);
}

console.log(Board.mapWidth, Board.mapHeight, Board.gameFieldEndX, Board.gameFieldEndY)




    // if (!board.gameover) {
    //   board.draw();
    // }

    // if (player1 && ai) {
    //   if (player1.alive && !ai.victory) {
    //     player1.checkBoundary();
    //     ai.checkBoundary();
    //     player1.draw();
    //   } else {
    //     endGame("Rambo")
    //     return;
    //   }
    //   if (ai.alive && !player1.victory) {
    //     player1.checkBoundary();
    //     ai.checkBoundary();
    //     ai.draw();
    //     ai.makeMove();
    //     ai.makeMove();
    //     ai.break();
    //     // ai.makeMove();
    //   } else {
    //     endGame("Player")
    //     return; //
    //   }
    // }

    // player1.checkBoundary() && player1.alive && player1.draw();
    // player2.checkBoundary() && player2.alive && player2.draw();

    // if (!player1.alive) {
    //   endGame('Blue');
    //   return;
    // }

    // if (!player2.alive) {
    //   endGame('Red');
    //   return;
    // }
    
    // if (player1 && player2)
    // if (player1.alive && !player2.victory) {
    //   player1.checkBoundary();
    //   player2.checkBoundary();
    //   player1.draw();
    // } else {
    //   endGame("Blue")
    //   return; // stop the animation
    // }
    // if (player2.alive && !player1.victory) {
    //   player1.checkBoundary();
    //   player2.checkBoundary();
    //   player2.draw();
    // } else {
    //   endGame("Red")
    //   return; // stop the animation
    // }





