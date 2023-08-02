// import Board from "./board.js";
// import Player from "./player.js";
// import Playertwo from "./playertwo.js";
// import Tile from "./tile.js";
// import AI from "./ai.js";
// import spawnBtnPlayer from './game.js'

// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");

// class Game {
//   constructor() {
//     this.board;
//     this.playerOne;
//     this.playerTwo;
//   }

//   start() {
//     console.log(this.board, this.playerOne, this.playerTwo)
//     this.board = undefined;
//     this.playerOne = undefined;
//     this.playerTwo = undefined;

//     this.board = new Board();
//     this.playerOne = new Player(
//       Board.gameFieldX + Tile.size * 1.5,
//       Board.gameFieldY + Tile.size * 1.5
//     );
//     this.playerTwo = new Playertwo(
//       Board.mapWidth + Tile.size * 1.5,
//       Board.mapHeight + Tile.size / 2
//     );
    
//     this.board.draw();

//     console.log(this.playerOne)
//     console.log(this.playerTwo)
//     console.log(this.board)

//     this.playerOne.currentPlace.occupied = true;
//     this.playerTwo.currentPlace.occupied = true;

//     // this.localAnimate(this.playerOne, this.playerTwo, this.board)
//     this.localAnimate(this.playerOne,this.playerTwo, this.board);
//     this.board.reset();
//   }

//   localAnimate(player1, player2, board) {
//     window.requestAnimationFrame(() => {
//       c.clearRect(0, 0, Board.gameFieldX, Board.gameFieldY);
//       board.draw();
//       if (player1 && player2) {
//         if (player1.alive && !player2.victory) {
//           player1.draw();
//         } else {
//           c.font = "200px Georgia";
//           c.fillStyle = "Orange";
//           c.fillText("Blue Wins!", canvas.width / 4, canvas.height / 2);
//           spawnBtnPlayer.style.display = "block"; // show the spawn button
//           return; // stop the animation
//         }
//         if (player2.alive && !player1.victory) {
//           player2.draw();
//         } else {
//           c.font = "200px Georgia";
//           c.fillStyle = "Orange";
//           c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
//           spawnBtnPlayer.style.display = "block"; // show the spawn button
//           return; // stop the animation
//         }
//       }
//       this.localAnimate(player1, player2, board);
//     });
//   }
// }

// export default Game
