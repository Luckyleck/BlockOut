import Board from "./board.js";
import Tile from "./tile.js";
import Boundary from "./boundary.js"

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const shovelRight = new Image();
shovelRight.src = "./images/shovels/Shovel_Yellow_Right.png";
const shovelLeft = new Image();
shovelLeft.src = "./images/shovels/Shovel_Yellow_Left.png";
const shovelDown = new Image();
shovelDown.src = "./images/shovels/Shovel_Yellow_Down.png";

class AI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alive = true;
    this.radius = 15;
    this.row = Math.floor((this.y - Board.playFieldStartY) / Tile.size + 1); // row is y
    this.col = Math.floor((this.x - Board.playFieldStartX) / Tile.size + 1); // col is x
    this.victory = false;
    this.currentPlace = this.getPlayerTile();
    this.lastKey = "";
    this.canMove = true;
    this.canBreak = true;
    this.breakCount = 0;
    this.direction = "left";
    this.image;
  }

  moveAndBreak() {
    this.makeMove();
    this.makeMove();
    this.break();
    this.makeMove();
  }

  makeMove() {
    if (!this.canMove) return false;

    const directions = ["north", "south", "east", "west"];

    let direction = directions[Math.floor(Math.random() * directions.length)];
    var nowTile;
    var nextTile;
    switch (direction) {
      case "north":
        // this.keys.ArrowUp.pressed = true;
        this.lastKey = "north";
        nowTile = this.getPlayerTile();
        nextTile = this.getAnyTileXY(this.x, this.y - 50);
        if (
          this.isTile(this.x, this.y - 50) &&
          nextTile.occupied === false &&
          nextTile.health > 0
        ) {
          nowTile.occupied = false;
          nextTile.occupied = true;
          this.y -= 50;
          this.direction = "up";
        }
        if (this.alive && this.isDead()) {
          this.alive = false;
        }
        break;
      case "west":
        // this.keys.ArrowLeft.pressed = true;
        this.lastKey = "west";
        nowTile = this.getPlayerTile();
        nextTile = this.getAnyTileXY(this.x - 50, this.y);
        if (
          this.isTile(this.x - 50, this.y) &&
          nextTile.occupied === false &&
          nextTile.health > 0
        ) {
          nowTile.occupied = false;
          nextTile.occupied = true;
          this.x -= 50;
          this.direction = "left";
        }
        if (this.alive && this.isDead()) {
          this.alive = false;
        }
        break;
      case "south":
        // this.keys.ArrowDown.pressed = true;
        this.lastKey = "south";
        nowTile = this.getPlayerTile();
        nextTile = this.getAnyTileXY(this.x, this.y + 50);
        if (
          this.isTile(this.x, this.y + 50) &&
          nextTile.occupied === false &&
          nextTile.health > 0
        ) {
          nowTile.occupied = false;
          nextTile.occupied = true;
          this.y += 50;
          this.direction = "down"
        }
        if (this.alive && this.isDead()) {
          this.alive = false;
        }
        break;
      case "east":
        // this.keys.ArrowRight.pressed = true;
        this.lastKey = "east";
        nowTile = this.getPlayerTile();
        nextTile = this.getAnyTileXY(this.x + 50, this.y);
        if (
          this.isTile(this.x + 50, this.y) &&
          nextTile.occupied === false &&
          nextTile.health > 0
        ) {
          nowTile.occupied = false;
          nextTile.occupied = true;
          this.x += 50;
          this.direction = "right"
        }
        if (this.alive && this.isDead()) {
          this.alive = false;
        }
        break;
    }
    // throttle
    this.canMove = false;
    setTimeout(() => (this.canMove = true), 200);
  }

  break() {
    if (!this.canBreak) return false;
    switch (this.lastKey) {
      case "north":
        if (
          this.isTile(this.x, this.y - 50) &&
          this.getAnyTileXY(this.x, this.y - 50).health > 0
        ) {
          this.breakTile(this.x, this.y - 50);
        }
        break;
      case "west":
        if (
          this.isTile(this.x - 50, this.y) &&
          this.getAnyTileXY(this.x - 50, this.y).health > 0
        ) {
          this.breakTile(this.x - 50, this.y);
        }
        break;
      case "south":
        if (
          this.isTile(this.x, this.y + 50) &&
          this.getAnyTileXY(this.x, this.y + 50).health > 0
        ) {
          this.breakTile(this.x, this.y + 50);
        }
        break;
      case "east":
        if (
          this.isTile(this.x + 50, this.y) &&
          this.getAnyTileXY(this.x + 50, this.y).health > 0
        ) {
          this.breakTile(this.x + 50, this.y);
        }
        break;
    }
    this.canBreak = false;
    setTimeout(() => (this.canBreak = true), 200);
  }

  draw() {
    this.pickImage();
    c.drawImage(this.image, this.x - 10, this.y - 20, 40, 40);
  }

  currentTile() {
    let row = Math.floor((this.y - Board.playFieldStartY) / Tile.size + 1); // row is y
    let col = Math.floor((this.x - Board.playFieldStartX) / Tile.size + 1); // col is x
    return [row, col];
  }

  getPlayerTile() {
    let row = this.currentTile()[0];
    let col = this.currentTile()[1];
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

  // breakTiles

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
    if (this.direction === "right") {
      this.image = shovelRight;
    } else if (this.direction === "left") {
      this.image = shovelLeft;
    } else if (this.direction === "down") {
      this.image = shovelDown;
    } else {
      this.image = shovelLeft;
    }
  }

  checkBoundary() {
    const currentTile = this.getPlayerTile();
    if (currentTile instanceof Boundary) {
      this.alive = false;
    }
  }
}

export default AI
