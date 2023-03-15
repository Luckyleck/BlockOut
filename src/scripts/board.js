import Tile from './tile.js'
import Boundary from './boundary.js'
import Player from './player.js'
// import grass from './img/grass.png'

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")

// c.fillRect(20, 20, 20, 20)

class Board {

  static ogmap = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
  ]

  static map = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
  ];

  // Map total Width and Height
  static mapWidth = Board.map[0].length * Tile.size;
  static mapHeight = Board.map.length * Tile.size;

  // Map Start x and y
  static gameFieldX = canvas.width / 2 / 2 / 2; //300
  static gameFieldY = canvas.height / 2 / 2 / 2; //100

  // Map End x and y
  static gameFieldEndX = (Board.map[0].length * Tile.size) + (Tile.size * 3)
  static gameFieldEndY = (Board.map.length * Tile.size) + (Tile.size * 2)

  // Playfield Width and Height
  static playFieldWidth = Board.mapWidth - Tile.size * 2;
  static playFieldHeight = Board.mapHeight - Tile.size * 2;

  // Playfield Start x and y
  static playFieldStartX = Board.gameFieldX + Tile.size;
  static playFieldStartY = Board.gameFieldY + Tile.size;

  constructor() {
    // this.tiles = []
    for (let i = 0; i < Board.map.length; i++) {
      for (let j = 0; j < Board.map[i].length; j++) {
        if (Board.map[i][j] === " ") {
          Board.map[i][j] = new Tile(
            i, // row
            j // col
          );
        } else {
          Board.map[i][j] = new Boundary(
            i, // row
            j // col
          );
        }
      }
    }
  }

  draw() {
    const startX = canvas.width / 2 / 2 / 2;
    const startY = canvas.height / 2 / 2 / 2;

    Board.map.forEach((row) => {
      row.forEach((tile) => {
   
        // Col first, then row
        if (tile instanceof Tile && tile.health === 3) {
          //   console.log(tile.row, tile.col);
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.fillStyle = "green";
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black"; // outline color
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          // c.drawImage(grass,startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size)
        } else if (tile instanceof Tile && tile.health === 2) {
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.fillStyle = "#80461B";
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black";
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
        } else if (tile instanceof Tile && tile.health === 1) {
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.fillStyle = "#362419";
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black";
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
        } else if (tile instanceof Tile && tile.health === 0) {
          c.globalAlpha = 0.0;
          c.fillStyle = "#ffebcd"; // color of background
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black";
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.globalAlpha = 1;
        } else if (tile instanceof Boundary) {
          c.shadowBlur = 8;
          c.shadowColor = "white";
          c.fillStyle = "grey";
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black";
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.shadowBlur = 0
          c.shadowColor = undefined;
        }
      });
    });
  }

  reset() {
    for (let i = 0; i < Board.map.length; i++) {
      for (let j = 0; j < Board.map[i].length; j++) {
        if (Board.map[i][j] instanceof Tile) {
          Board.map[i][j] = " "
        } else {
          Board.map[i][j] = "-"
        }
      }
    }
  }

  //   shrink() {
  //     // Remove the first and last row
  //     Board.map.shift();
  //     Board.map.pop();

  //     // Remove the first and last column from each remaining row
  //     for (let i = 0; i < Board.map.length; i++) {
  //       Board.map[i].shift();
  //       Board.map[i].pop();
  //     }

  //     // Update the map width and height to reflect the new size
  //     Board.mapWidth -= Tile.size * 2;
  //     Board.mapHeight -= Tile.size * 2;

  //     // Update the playfield width and height to reflect the new size
  //     Board.playFieldWidth = Board.mapWidth - Tile.size * 2;
  //     Board.playFieldHeight = Board.mapHeight - Tile.size * 2;

  //     // Update the playfield start x and y to reflect the new size
  //     Board.playFieldStartX = Board.gameFieldX + Tile.size;
  //     Board.playFieldStartY = Board.gameFieldY + Tile.size;

  //     // Create a new border around the playfield
  //     for (let i = 0; i < Board.map.length; i++) {
  //       if (i === 0 || i === Board.map.length - 1) {
  //         for (let j = 0; j < Board.map[i].length; j++) {
  //           Board.map[i][j] = new Boundary(i, j);
  //         }
  //       } else {
  //         Board.map[i][0] = new Boundary(i, 0);
  //         Board.map[i][Board.map[i].length - 1] = new Boundary(
  //           i,
  //           Board.map[i].length - 1
  //         );
  //       }
  //     }

  //     this.draw();
  //   }
}

let mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove',
  function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse)
  })

window.addEventListener("mousemove", function (event) {
  const gameFieldX = canvas.width / 4;
  const gameFieldY = canvas.height / 8;
  const tileWidth = Board.map[0][0].size;
  const tileHeight = Board.map[0][0].size;

  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;

  const tileX = Math.floor((mouseX - gameFieldX) / tileWidth);
  const tileY = Math.floor((mouseY - gameFieldY) / tileHeight);

  if (tileX >= 0 && tileX < Board.map[0].length && tileY >= 0 && tileY < Board.map.length) {
    const tile = Board.map[tileY][tileX];
    //   console.log(tile);
  }
});

// var gridSize = 25;
// var lineColor = "#ccc";

// // Draw the grid lines
// c.beginPath();
// for (var x = 0; x <= canvas.width; x += gridSize) {
//   c.moveTo(x, 0);
//   c.lineTo(x, canvas.height);
// }
// for (var y = 0; y <= canvas.height; y += gridSize) {
//   c.moveTo(0, y);
//   c.lineTo(canvas.width, y);
// }
// c.strokeStyle = lineColor;
// c.stroke();




export default Board;


