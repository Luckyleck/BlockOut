import Board from "./board.js";
import Tile from "./tile.js";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.alive = true;
    this.lastKey = "";
    this.keys = {
      w: { pressed: false },
      a: { pressed: false },
      s: { pressed: false },
      d: { pressed: false },
    };

    window.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "w":
          this.keys.w.pressed = true;
          this.lastKey = "w";
          this.moveIfPossible(this.x, this.y - Tile.size);
          break;
        case "a":
          this.keys.a.pressed = true;
          this.lastKey = "a";
          this.moveIfPossible(this.x - Tile.size, this.y);
          break;
        case "s":
          this.keys.s.pressed = true;
          this.lastKey = "s";
          this.moveIfPossible(this.x, this.y + Tile.size);
          break;
        case "d":
          this.keys.d.pressed = true;
          this.lastKey = "d";
          this.moveIfPossible(this.x + Tile.size, this.y);
          break;
        case " ":
          this.breakTile();
          break;
      }
    });
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
    c.closePath();
  }

  moveIfPossible(x, y) {
    if (this.isTile(x, y)) {
      return;
    }

    this.x = x;
    this.y = y;

    if (this.alive && this.isDead()) {
      this.alive = false;
    }
  }

  breakTile() {
    switch (this.lastKey) {
      case "w":
        this.breakTileAt(this.x, this.y - Tile.size);
        break;
      case "a":
        this.breakTileAt(this.x - Tile.size, this.y);
        break;
      case "s":
        this.breakTileAt(this.x, this.y + Tile.size);
        break;
      case "d":
        this.breakTileAt(this.x + Tile.size, this.y);
        break;
    }
  }

  breakTileAt(x, y) {
    const [row, col] = this.getRowCol(x, y);
    const tile = Board.map[row][col];
    if (tile && tile.health > 0) {
      tile.health -= 1;
      if (tile.health === 0) {
        tile.visible = false;
      }
    }
  }

  getRowCol(x, y) {
    const row = Math.floor((y - Board.playFieldStartY) / Tile.size);
    const col = Math.floor((x - Board.playFieldStartX) / Tile.size);
    return [row, col];
  }

  isTile(x, y) {
    const [row, col] = this.getRowCol(x, y);
    const tile = Board.map[row][col];
    return Boolean(tile instanceof Tile);
  }

  getPlayerTile() {
    const [row, col] = this.getRowCol(this.x, this.y);
    return Board.map[row][col];
  }

  isDead() {
    const tile = this.getPlayerTile();
    return tile && tile.health === 0;
  }

  
}

export default Player;
