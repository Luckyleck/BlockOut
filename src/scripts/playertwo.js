import Board from "./board.js";
import Tile from "./tile.js";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const shovelRight = new Image();
shovelRight.src = "./images/shovels/Shovel_Blue_Right.png";
const shovelLeft = new Image();
shovelLeft.src = "./images/shovels/Shovel_Blue_Left.png";
const shovelDown = new Image();
shovelDown.src = "./images/shovels/Shovel_Blue_Down.png";

class Playertwo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx;
    this.dy;
    this.radius = 15;
    this.row = Math.floor((this.y - Board.playFieldStartY) / Tile.size + 1); // row is y
    this.col = Math.floor((this.x - Board.playFieldStartX) / Tile.size + 1); // col is x
    this.currentPlace = this.getPlayerTile();
    this.alive = true;
    this.victory = false;
    this.direction = 'left'
    this.image;
    this.lastKey = "";

    window.addEventListener("keydown", ({ key }) => {
      // console.log(key);
      var nowTile;
      var nextTile;
      switch (key) {
        case "ArrowUp":

          this.lastKey = "ArrowUp";
          nowTile = this.getPlayerTile();
          nextTile = this.getAnyTileXY(this.x, this.y - 50);
          if (this.isTile(this.x, this.y - 50) && nextTile.occupied === false) {
            nowTile.occupied = false;
            nextTile.occupied = true;
            this.y -= 50;
            this.direction = "up";
          }
          if (this.alive && this.isDead()) {
            this.alive = false;
          }
          break;
        case "ArrowLeft":

          this.lastKey = "ArrowLeft";
          nowTile = this.getPlayerTile();
          nextTile = this.getAnyTileXY(this.x - 50, this.y);
          if (this.isTile(this.x - 50, this.y) && nextTile.occupied === false) {
            nowTile.occupied = false;
            nextTile.occupied = true;
            this.x -= 50;
            this.direction = "left";
          }
          if (this.alive && this.isDead()) {
            this.alive = false;
          }
          break;
        case "ArrowDown":
 
          this.lastKey = "ArrowDown";
          nowTile = this.getPlayerTile();
          nextTile = this.getAnyTileXY(this.x, this.y + 50);
          if (this.isTile(this.x, this.y + 50) && nextTile.occupied === false) {
            nowTile.occupied = false;
            nextTile.occupied = true;
            this.y += 50;
            this.direction = "down";
          }
          if (this.alive && this.isDead()) {
            this.alive = false;
          }
          break;
        case "ArrowRight":
      
          this.lastKey = "ArrowRight";
          nowTile = this.getPlayerTile();
          nextTile = this.getAnyTileXY(this.x + 50, this.y);
          if (this.isTile(this.x + 50, this.y) && nextTile.occupied === false) {
            nowTile.occupied = false;
            nextTile.occupied = true;
            this.direction = "right";
            this.x += 50;
          }
          if (this.alive && this.isDead()) {
            this.alive = false;
          }
          break;
        case "Enter":
          switch (this.lastKey) {
            case "ArrowUp":
              if (this.isTile(this.x, this.y - 50)) {
                this.breakTile(this.x, this.y - 50);
              }
              break;
            case "ArrowLeft":
              if (this.isTile(this.x - 50, this.y)) {
                this.breakTile(this.x - 50, this.y);
              }
              break;
            case "ArrowDown":
              if (this.isTile(this.x, this.y + 50)) {
                this.breakTile(this.x, this.y + 50);
              }
              break;
            case "ArrowRight":
              if (this.isTile(this.x + 50, this.y)) {
                this.breakTile(this.x + 50, this.y);
              }
              break;
          }
          console.log("hello");
          break;
      }
    });
  }

  draw() {
    this.pickImage();
    c.drawImage(this.image, this.x - 20, this.y - 20, 40, 40);
  }

  currentTile() {
    let row = Math.floor((this.y - Board.playFieldStartY) / Tile.size + 1); // row is y
    let col = Math.floor((this.x - Board.playFieldStartX) / Tile.size + 1); // col is x
    // console.log([row, col]);
    return [row, col];
  }

  getPlayerTile() {
    let row = this.currentTile()[0];
    let col = this.currentTile()[1];
    // console.log([row, col]);
    // console.log(Board.map[row][col]);
    return Board.map[row][col];
  }

  getAnyTile(row, col) {
    return Board.map[row][col];
  }

  getAnyTileXY(x, y) {
    let tile = this.xyConvert(x, y);
    let row = tile[0];
    let col = tile[1];

    return Board.map[row][col];
  }

  breakTile(x, y) {
    let pos = this.xyConvert(x, y);
    let row = pos[0];
    let col = pos[1];

    let tile = this.getAnyTile(row, col);
    if (tile.health > 0) {
      tile.health -= 1;
      if (tile.health === 0) {
        tile.visible = false;
        if (tile.occupied) {
          this.victory = true;
        }
      }
    }
  }

  // Tile existence logic (use for boundary detection)

  isTile(x, y) {
    let tile = this.xyConvert(x, y);
    let row = tile[0];
    let col = tile[1];

    if (Board.map[row][col] instanceof Tile) {
      return true;
    } else {
      return false;
    }
  }

  xyConvert(x, y) {
    let row = Math.floor((y - Board.playFieldStartY) / Tile.size + 1); // row is y
    let col = Math.floor((x - Board.playFieldStartX) / Tile.size + 1);

    return [row, col];
  }

  // Player dead logic

  isDead() {
    let tile = this.getPlayerTile();

    // console.log(tile);
    if (tile.health === 0) {
      this.alive = false;
    } else {
      this.alive = true;
    }
  }

  reset() {
    this.x = undefined;
    this.y = undefined;
    this.dx = undefined;
    this.dy = undefined;
    this.radius = undefined;
    this.row = undefined;
    this.col = undefined;
    this.currentPlace = undefined;
    this.alive = undefined;
    this.victory = undefined;
    this.lastkey = undefined;
  }

  pickImage() {

        if (this.direction === 'right') {
            this.image = shovelRight;
        } else if (this.direction === 'left') {
            this.image = shovelLeft;
        } else if (this.direction === 'down') {
            this.image = shovelDown;
        } else {
            this.image = shovelRight;
        }
    
    }
}

export default Playertwo;
