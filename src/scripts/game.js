import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";

// const images = [
//   './img/blockout/frame_002_delay-0.03s.png'
  // './img/blockout/frame_003_delay-0.03s.png',
  // './img/blockout/frame_004_delay-0.03s.png',
  // './img/blockout/frame_005_delay-0.03s.png',
  // './img/blockout/frame_006_delay-0.03s.png',
  // './img/blockout/frame_007_delay-0.03s.png',
  // './img/blockout/frame_008_delay-0.03s.png',
  // './img/blockout/frame_009_delay-0.03s.png',
  // './img/blockout/frame_010_delay-0.03s.png',
  // './img/blockout/frame_011_delay-0.03s.png',
  // './img/blockout/frame_012_delay-0.03s.png',
  // './img/blockout/frame_013_delay-0.03s.png',
  // './img/blockout/frame_014_delay-0.03s.png',
  // './img/blockout/frame_015_delay-0.03s.png',
  // './img/blockout/frame_016_delay-0.03s.png',
  // './img/blockout/frame_017_delay-0.03s.png',
  // './img/blockout/frame_018_delay-0.03s.png',
  // './img/blockout/frame_019_delay-0.03s.png',
  // './img/blockout/frame_020_delay-0.03s.png',
  // './img/blockout/frame_021_delay-0.03s.png',
  // './img/blockout/frame_022_delay-0.03s.png',
  // './img/blockout/frame_023_delay-0.03s.png',
  // './img/blockout/frame_024_delay-0.03s.png',
  // './img/blockout/frame_025_delay-0.03s.png',
  // './img/blockout/frame_026_delay-0.03s.png',
  // './img/blockout/frame_027_delay-0.03s.png',
  // './img/blockout/frame_028_delay-0.03s.png',
  // './img/blockout/frame_029_delay-0.03s.png',
  // './img/blockout/frame_030_delay-0.03s.png',
  // './img/blockout/frame_031_delay-0.03s.png',
  // './img/blockout/frame_032_delay-0.03s.png',
  // './img/blockout/frame_033_delay-0.03s.png',
  // './img/blockout/frame_034_delay-0.03s.png',
  // './img/blockout/frame_035_delay-0.03s.png',
  // './img/blockout/frame_036_delay-0.03s.png',
  // './img/blockout/frame_037_delay-0.03s.png',
  // './img/blockout/frame_038_delay-0.03s.png',
  // './img/blockout/frame_039_delay-0.03s.png',
  // './img/blockout/frame_040_delay-0.03s.png',
  // './img/blockout/frame_041_delay-0.03s.png',
  // './img/blockout/frame_042_delay-0.03s.png',
  // './img/blockout/frame_043_delay-0.03s.png',
  // './img/blockout/frame_044_delay-0.03s.png',
  // './img/blockout/frame_045_delay-0.03s.png',
  // './img/blockout/frame_046_delay-0.03s.png',
  // './img/blockout/frame_047_delay-0.03s.png',
  // './img/blockout/frame_048_delay-0.03s.png',
  // './img/blockout/frame_049_delay-0.03s.png',
  // './img/blockout/frame_050_delay-0.03s.png',
  // './img/blockout/frame_001_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_003_delay-0.03s.png',
  // './img/blockout/frame_004_delay-0.03s.png',
  // './img/blockout/frame_005_delay-0.03s.png',
  // './img/blockout/frame_006_delay-0.03s.png',
  // './img/blockout/frame_007_delay-0.03s.png',
  // './img/blockout/frame_008_delay-0.03s.png',
  // './img/blockout/frame_009_delay-0.03s.png',
  // './img/blockout/frame_010_delay-0.03s.png',
  // './img/blockout/frame_001_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_003_delay-0.03s.png',
  // './img/blockout/frame_004_delay-0.03s.png',
  // './img/blockout/frame_005_delay-0.03s.png',
  // './img/blockout/frame_006_delay-0.03s.png',
  // './img/blockout/frame_007_delay-0.03s.png',
  // './img/blockout/frame_008_delay-0.03s.png',
  // './img/blockout/frame_009_delay-0.03s.png',
  // './img/blockout/frame_010_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
  // './img/blockout/frame_002_delay-0.03s.png',
// ];
// let index = 0;

// function changeImage() {
//   document.getElementById('image').src = images[index];
//   index++;
//   if (index === images.length) {
//     index = 0;
//   }
// }

// setInterval(changeImage, 1000); // change image every 1 second


const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//buttons
const spawnBtnPlayer = document.getElementById("spawn-btn-player");
const spawnBtnAI = document.getElementById("spawn-btn-ai")

let playerOne;
let playerTwo;
let board;
var rambo;

// function reset(){
//   playerOne = undefined
//   playerTwo = undefined
//   board = undefined
// }

function localAnimate(player1, player2, board) {
  window.requestAnimationFrame(() => {
    c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
    board.draw();
    if (player1 && player2) {
      if (player1.alive && !player2.victory) {
        player1.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnPlayer.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
      if (player2.alive && !player1.victory) {
        player2.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnPlayer.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
    }
    localAnimate(player1, player2, board);
  });
}

function startPlayerGame() {
  // debugger
  spawnBtnPlayer.style.display = "none"; 
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

spawnBtnPlayer.addEventListener("click", () => {

  startPlayerGame();

});


// const board = new Board();
// Board.map.forEach((ele) => console.log(ele));
// // const player = new Player(375, 175)
// console.log(Board.gameFieldX);
// console.log(Board.gameFieldY);


// var player;
// var player2;

// add event listener for the button click
// spawnBtn.addEventListener("click", () => {
//   // create a new player and add it to the canvas
//   player = new Player(Board.gameFieldX + Tile.size * 1.5,
//     Board.gameFieldY + Tile.size * 1.5);
//   player2 = new Playertwo(Board.mapWidth + (Tile.size * 1.5), Board.mapHeight + (Tile.size / 2));
//   player.currentPlace.occupied = true;
//   player2.currentPlace.occupied = true;
//   spawnBtn.style.display = "none";

//   localAnimate();
// });

// function tilePostion(row, col) {
//   let x = Board.map[row][col].row
//   let y = Board.map[row][col].col

// // startX + tile.col * tile.size, startY + tile.row * tile.size;
// }
// const player = new Player(
//   Board.gameFieldX + Tile.size * 1.5,
//   Board.gameFieldY + Tile.size * 1.5
// );
// const player2 = new Playertwo(Board.mapWidth + (Tile.size * 1.5), Board.mapHeight + (Tile.size / 2));
// const rambo = new AI(Board.playFieldWidth/2, Board.playFieldHeight/2)

// rambo.currentPlace.occupied = true


// function localAnimate() {
//   window.requestAnimationFrame(localAnimate);
//   c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
//   board.draw();
//   if (player && player2) {
//     if (player.alive && !player2.victory) {
//       player.draw();
//     } else {
//       c.font = "200px Georgia";
//       c.fillStyle = "Orange";
//       c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
//       spawnBtn.style.display = "block"; // show the spawn button
//       return; // stop the animation
//     }
//     if (player2.alive && !player.victory) {
//       player2.draw();
//     } else {
//       c.font = "200px Georgia";
//       c.fillStyle = "Orange";
//       c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
//       spawnBtn.style.display = "block"; // show the spawn button
//       return; // stop the animation
//     }
//   }
// }



// function animate() {
//   window.requestAnimationFrame(animate);
//   c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
//   // c.fillRect(0,0,100,100)
//   board.draw();
//   // if (rambo) {
//   //   if (rambo.alive && (!player2.victory || !player.victory)) {
//   //     rambo.draw(); 
//   //   } else {
//   //     c.font = "200px Georgia";
//   //     c.fillStyle = "Orange";
//   //     c.fillText("Players Win!", canvas.width / 4, canvas.height / 2);
//   //   }
//   //   rambo.makeMove();
//   //   rambo.makeMove();
//   //   rambo.break();
//   // }
//   if (player.alive && !player2.victory) {
//     player.draw();
//   } else {
//     // if (rambo.victory) {
//     //   c.font = "200px Georgia";
//     //   c.fillStyle = "Orange";
//     //   c.fillText("Rambo Wins!", canvas.width / 4, canvas.height / 2);
//     // }
//     c.font = "200px Georgia";
//     c.fillStyle = "Orange";
//     c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
//   }
//   if (player2.alive && !player.victory) {
//     player2.draw();
//   } else {
//     // if (rambo.victory) {
//     //   c.font = "200px Georgia";
//     //   c.fillStyle = "Orange";
//     //   c.fillText("Rambo Wins!", canvas.width / 4, canvas.height / 2);
//     // }
//     c.font = "200px Georgia";
//     c.fillStyle = "Orange";
//     c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
//   }
// }

// player.currentTile();
// player.getPlayerTile();
// player2.getPlayerTile();
// console.log(player.currentPlace)

console.log(Board.mapWidth, Board.mapHeight, Board.gameFieldEndX, Board.gameFieldEndY)
// animate();








