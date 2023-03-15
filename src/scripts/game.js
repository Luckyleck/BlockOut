import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";
import Game from "./play.js"

let myAudio = document.querySelector("#audio");

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
myAudio.play();


let playerOne;
let playerTwo;
let board;

// function reset(){
//   playerOne = undefined
//   playerTwo = undefined
//   board = undefined
// }

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
        c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnAI.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
      if (ai.alive && !player1.victory) {
        ai.draw();
        ai.makeMove();
        ai.makeMove();
        ai.break();
        ai.makeMove();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
        spawnBtnAI.style.display = "block"; // show the spawn button
        return; // stop the animation
      }
    }
    localAnimate(player1, ai, board);
  });
}

function startAiGame() {
  // debugger
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
  playerOne = new Player (
    Board.gameFieldX + Tile.size * 1.5,
    Board.gameFieldY + Tile.size * 1.5
  );
  playerTwo = new AI (
    Board.mapWidth + Tile.size * 1.5,
    Board.mapHeight + Tile.size / 2
  );

  playerOne.currentPlace.occupied = true;
  playerTwo.currentPlace.occupied = true;
  console.log(playerOne, playerTwo);

  aiAnimate(playerOne, playerTwo, board);
}

// spawnBtnPlayer.addEventListener("click", () => {


//   // spawnBtnPlayer.style.display = "none"
//   const game = new Game();
//   game.start();

// });


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

export default spawnBtnPlayer




