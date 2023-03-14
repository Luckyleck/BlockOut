import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";


const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const board = new Board();
Board.map.forEach((ele) => console.log(ele));
// const player = new Player(375, 175)
console.log(Board.gameFieldX);
console.log(Board.gameFieldY);

function tilePostion(row, col) {
  let x = Board.map[row][col].row
  let y = Board.map[row][col].col

// startX + tile.col * tile.size, startY + tile.row * tile.size;
}
const player = new Player(
  Board.gameFieldX + Tile.size * 1.5,
  Board.gameFieldY + Tile.size * 1.5
);
const player2 = new Playertwo(Board.mapWidth, Board.mapHeight);
// const rambo = new AI(Board.playFieldWidth/2, Board.playFieldHeight/2)
player.currentPlace.occupied = true;
player2.currentPlace.occupied = true;
// rambo.currentPlace.occupied = true




function animate() {
  window.requestAnimationFrame(animate);
  c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
  // c.fillRect(0,0,100,100)
  board.draw();
  // if (rambo) {
  //   if (rambo.alive && (!player2.victory || !player.victory)) {
  //     rambo.draw(); 
  //   } else {
  //     c.font = "200px Georgia";
  //     c.fillStyle = "Orange";
  //     c.fillText("Players Win!", canvas.width / 4, canvas.height / 2);
  //   }
  //   rambo.makeMove();
  //   rambo.makeMove();
  //   rambo.break();
  // }
  if (player.alive && !player2.victory) {
    player.draw();
  } else {
    // if (rambo.victory) {
    //   c.font = "200px Georgia";
    //   c.fillStyle = "Orange";
    //   c.fillText("Rambo Wins!", canvas.width / 4, canvas.height / 2);
    // }
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
  }
  if (player2.alive && !player.victory) {
    player2.draw();
  } else {
    // if (rambo.victory) {
    //   c.font = "200px Georgia";
    //   c.fillStyle = "Orange";
    //   c.fillText("Rambo Wins!", canvas.width / 4, canvas.height / 2);
    // }
    c.font = "200px Georgia";
    c.fillStyle = "Orange";
    c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
  }
}

// player.currentTile();
// player.getPlayerTile();
// player2.getPlayerTile();
// console.log(player.currentPlace)

console.log(Board.mapWidth, Board.mapHeight, Board.gameFieldEndX, Board.gameFieldEndY)
animate();
