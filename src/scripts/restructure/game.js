import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const board = new Board();

const player = new Player(
  Board.canvasStartX + Tile.size * 1.5,
  Board.canvasStartY + Tile.size * 1.5,
  Board.map
);
const player2 = new Playertwo(Board.mapWidth, Board.mapHeight);

function handleKeyDown(event) {
  switch (event.key) {
    case "w":
      player.moveUp();
      break;
    case "a":
      player.moveLeft();
      break;
    case "s":
      player.moveDown();
      break;
    case "d":
      player.moveRight();
      break;
  }
}

function handleKeyUp(event) {
  switch (event.key) {
    case "w":
      player.stopUp();
      break;
    case "a":
      player.stopLeft();
      break;
    case "s":
      player.stopDown();
      break;
    case "d":
      player.stopRight();
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function animate() {
  window.requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  board.draw();

  if (player.alive) {
    player.draw();
  } else {
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
  }

  if (player2.alive) {
    player2.draw();
  } else {
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
  }
}

animate();
