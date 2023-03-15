import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";
import Game from "./play.js"

// let myAudio = document.querySelector("#audio");

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//buttons
const spawnBtnPlayer = document.getElementById("spawn-btn-player");
const spawnBtnAI = document.getElementById("spawn-btn-ai")

spawnBtnPlayer.addEventListener("click", () => {
  startPlayerGame();
})

spawnBtnAI.addEventListener("click", () => {
  startAiGame();
})
// myAudio.play();


let playerOne;
let playerTwo;
let board;

function localAnimate(player1, player2, board) {
  
  window.requestAnimationFrame(() => {
    // c.clearRect(Board.gameFieldX, Board.gameFieldY, Board.gameFieldEndX - Board.gameFieldX, Board.gameFieldEndY - Board.gameFieldY);
    c.clearRect(0, 0, canvas.width, canvas.height);

    board.draw();
    if (player1 && player2) {
      if (player1.alive && !player2.victory) {
        player1.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnPlayer.style.display = "block"; // show the spawn button
        spawnBtnAI.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
      if (player2.alive && !player1.victory) {
        player2.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnPlayer.style.display = "block"; // show the spawn button
        spawnBtnAI.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
    }
    localAnimate(player1, player2, board);
  });
}

function startPlayerGame() {
  // debugger
  spawnBtnPlayer.style.display = "none";
  spawnBtnAI.style.display = "none";
  if (board) {
    board.reset();
  }
  if (playerOne) {
    playerOne.reset();
  }
  if (playerTwo) {
    playerTwo.reset();
  }

  board = undefined;
  playerOne = undefined;
  playerTwo = undefined;
  
  board = new Board();
  playerOne = new Player(Board.gameFieldX + (Tile.size * 1.5), Board.gameFieldY + (Tile.size * 1.5))
  playerTwo = new Playertwo(Board.mapWidth + (Tile.size * 1.5), Board.mapHeight + (Tile.size / 2))

  playerOne.currentPlace.occupied = true;
  playerTwo.currentPlace.occupied = true;
  console.log(playerOne, playerTwo)

  localAnimate(playerOne, playerTwo, board);
}


function aiAnimate(player1, ai, board) {
  window.requestAnimationFrame(() => {
    // c.clearRect(Board.gameFieldX, Board.gameFieldY, Board.gameFieldEndX - Board.gameFieldX, Board.gameFieldEndY - Board.gameFieldY);
    c.clearRect(0, 0, canvas.width, canvas.height);

    board.draw();
    if (player1 && ai) {
      if (player1.alive && !ai.victory) {
        player1.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Rambo wins!", canvas.width / 4 / 2, canvas.height / 2);
        spawnBtnAI.style.display = "block"; // show the spawn button
        spawnBtnPlayer.style.display = "block";
        return; // stop the animation
      }
      if (ai.alive && !player1.victory) {
        ai.draw();
        ai.makeMove();
        ai.makeMove();
        ai.break();
        // ai.makeMove();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Player wins!", canvas.width / 4 / 2, canvas.height / 2);
        spawnBtnAI.style.display = "block"; // show the spawn button
        spawnBtnPlayer.style.display = "block";
        return; // stop the animation
      }
    }
    aiAnimate(player1, ai, board);
  });
}

function startAiGame() {
  // debugger
  spawnBtnAI.style.display = "none";
  spawnBtnPlayer.style.display = "none";
  if (board) {
    board.reset();
  }
  if (playerOne) {
    playerOne.reset();
  }
  if (playerTwo) {
    playerTwo.reset();
  }

  board = undefined;
  playerOne = undefined;
  playerTwo = undefined;

  board = new Board();
  playerOne = new Player (
    Board.gameFieldX + Tile.size * 1.5,
    Board.gameFieldY + Tile.size * 1.5
  );
  playerTwo = new AI (
    Board.mapWidth + (Tile.size * 0.5),
    Board.mapHeight - Tile.size / 2
  );

  playerOne.currentPlace.occupied = true;
  playerTwo.currentPlace.occupied = true;
  console.log(playerOne, playerTwo);

  aiAnimate(playerOne, playerTwo, board);
}

console.log(Board.mapWidth, Board.mapHeight, Board.gameFieldEndX, Board.gameFieldEndY)

// animate();

export default spawnBtnPlayer




