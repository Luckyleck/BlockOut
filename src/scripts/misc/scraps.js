const borderSize = 50;
const tileSize = 50;

const boardX = Board.canvasStartX + borderSize;
const boardY = Board.canvasStartY + borderSize;

const playerX = player.x - boardX;
const playerY = player.y - boardY;

const tileRow = Math.floor(playerY / tileSize) + 1;
const tileCol = Math.floor(playerX / tileSize) + 1;

console.log(`Player is on row ${tileRow} and col ${tileCol}`);
console.log(Board.playFieldStartX)
console.log(Board.playFieldStartY)
console.log(player.row)
console.log(player.col)




window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      this.keys.w.pressed = true;
      lastKey = "w";

      if ()
      this.y -= 50; // set the y-velocity to move upward
      // this.dy = -5
      break;
    case "a":
      this.keys.a.pressed = true;
      lastKey = "a";
      this.x -= 50; // set the x-velocity to move left
      // this.dx = -5
      break;
    case "s":
      this.keys.s.pressed = true;
      lastKey = "s";
      this.y += 50; // set the y-velocity to move downward
      // this.dy = 5
      break;
    case "d":
      this.keys.d.pressed = true;
      lastKey = "d";
      this.x += 50; // set the x-velocity to move right
      // this.dx = 5
      break;
  }
  // console.log(keys.d.pressed)
  // console.log(keys.s.pressed)
});


draw() {

        const startX = canvas.width / 4
        const startY = canvas.height / 8

        Board.map.forEach((row) => {
            row.forEach((tile) => {
              if (tile instanceof Tile && tile.health === 3) {
                  // console.log(tile.row, tile.col)
                  c.fillStyle = 'green';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 2) {
                  c.fillStyle = '#80461B';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 1) {
                  c.fillStyle = '#352C29';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 0) {
                  c.fillStyle = '#ffebcd';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else {
                  c.fillStyle = 'blue';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              }
            })
        })
    }




// let lastKey = ''

// const keys = {
//     w: {
//         pressed: false
//     },
//     a: {
//         pressed: false
//     },
//     s: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     }
// }

// window.addEventListener('keydown', ({ key }) => {
//     switch (key) {
//         case 'w':
//             keys.w.pressed = true
//             lastKey = 'w'
//             player.velocity.y = -3 // set the y-velocity to move upward
//             player.y -= 3
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             player.velocity.x = -3 // set the x-velocity to move left
//             break
//         case 's':
//             keys.s.pressed = true
//             lastKey = 's'
//             player.velocity.y = 3 // set the y-velocity to move downward
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             player.velocity.x = 3 // set the x-velocity to move right
//             break
//     }
//     // console.log(keys.d.pressed)
//     // console.log(keys.s.pressed)
// })

// window.addEventListener('keyup', ({ key }) => {
//     switch (key) {
//         case 'w':
//             keys.w.pressed = false
//             player.velocity.y = 0 // reset the y-velocity to 0
//             break
//         case 'a':
//             keys.a.pressed = false
//             player.velocity.x = 0 // reset the x-velocity to 0
//             break
//         case 's':
//             keys.s.pressed = false
//             player.velocity.y = 0 // reset the y-velocity to 0
//             break
//         case 'd':
//             keys.d.pressed = false
//             player.velocity.x = 0 // reset the x-velocity to 0
//             break
//         }
//         // console.log(keys.d.pressed)
//         // console.log(keys.s.pressed)
// })

// console.log(Board.mapWidth)
// console.log(Board.mapHeight)
// console.log(Board.playFieldWidth)
// console.log(Board.playFieldHeight)

// board.draw();

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
const player2 = new Playertwo(Board.mapWidth + (Tile.size * 1.5), Board.mapHeight + (Tile.size / 2));
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