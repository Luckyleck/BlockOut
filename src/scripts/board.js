import Tile from './tile.js'
import Boundary from './boundary.js'
import Player from './player.js'
// import grass from './img/grass.png'

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")

const grassFull = new Image();
grassFull.src = "./images/tiles/grass.png";

const stone = new Image();
stone.src = "./images/tiles/stone_pink.png"

const dirtLight = new Image();
dirtLight.src = "./images/tiles/dirt_light.png"

const dirtDark = new Image();
dirtDark.src = "./images/tiles/dirt_dark.png";

// c.fillRect(20, 20, 20, 20)

class Board {


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
  ]

  static canvasCenterX = canvas.width/2
  static canvasCenterY = canvas.height/2

  // Map total Width and Height
  static mapWidth = Board.map[0].length * Tile.size;
  static mapHeight = Board.map.length * Tile.size;

  // Map Start x and y
  static gameFieldX = Board.canvasCenterX / 2 / 2 + 60; //300
  static gameFieldY = Board.canvasCenterY / 4 ; //100

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
    const startX = Board.gameFieldX
    const startY = Board.gameFieldY

    Board.map.forEach((row) => {
      row.forEach((tile) => {
   
        // Col first, then row
        if (tile instanceof Tile && tile.health === 3) {
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.drawImage(grassFull,startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size)
        } else if (tile instanceof Tile && tile.health === 2) {
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.drawImage(dirtLight,startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size)
        } else if (tile instanceof Tile && tile.health === 1) {
          c.shadowBlur = 10;
          c.shadowColor = "black";
          c.drawImage(dirtDark,startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size)
        } else if (tile instanceof Tile && tile.health === 0) {
          c.globalAlpha = 0.0;
          c.fillStyle = "#ffebcd"; // color of background
          c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.lineWidth = 2;
          c.strokeStyle = "black";
          c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          c.globalAlpha = 1;
        } else if (tile instanceof Boundary) {
          // c.shadowBlur = 8;
          // c.shadowColor = "black";
          // c.fillStyle = "grey";
          // c.fillRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          // // c.lineWidth = 2;
          // // c.strokeStyle = "black";
          // // c.strokeRect(startX + tile.col * tile.size, startY + tile.row * tile.size, tile.size, tile.size);
          // c.shadowBlur = 0
          // c.shadowColor = undefined;
          c.drawImage(stone,startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size)
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
}

export default Board;


