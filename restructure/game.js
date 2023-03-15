import Board from "./board.js";
import Player from "./player.js";
import PlayerTwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const board = new Board();

const player = new Player(
  Board.gameFieldX + Tile.size * 1.5,
  Board.gameFieldY + Tile.size * 1.5
);
const player2 = new PlayerTwo(
  Board.mapWidth + (Tile.size * 1.5),
  Board.mapHeight + (Tile.size / 2)
);
player.currentPlace.occupied = true;
player2.currentPlace.occupied = true;

function animate() {
  window.requestAnimationFrame(animate);
  c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
  board.draw();

  if (player.victory) {
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
  } else if (player2.victory) {
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
  } else {
    player.draw();
    player2.draw();
  }
}

function hasPlayerWon(player) {
  return player.currentPlace.row === Board.endRow && player.currentPlace.col === Board.endCol;
}

console.log(Board.mapWidth, Board.mapHeight, Board.gameFieldEndX, Board.gameFieldEndY);
animate();