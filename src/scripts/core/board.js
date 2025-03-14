import { Tile, Boundary } from '../utils/tile-manager.js';
import assetManager from './assets.js';
import SETTINGS from '../constants/settings.js';

/**
 * Board class that manages the game map and field
 */
class Board {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    
    // Game state
    this.timer = 0;
    this.intervalId = null;
    this.shrinkCounter = 0;
    this.gameover = false;
    
    // Canvas center
    this.canvasCenterX = canvas.width / 2;
    this.canvasCenterY = canvas.height / 2;
    
    // Initialize the map
    this.initializeMap();
    
    // Calculate board dimensions
    this.calculateBoardDimensions();
  }

  /**
   * Initialize the game map with tiles and boundaries
   */
  initializeMap() {
    this.map = [];
    
    // Deep copy the initial map configuration
    for (let i = 0; i < SETTINGS.INITIAL_MAP.length; i++) {
      this.map[i] = [];
      for (let j = 0; j < SETTINGS.INITIAL_MAP[i].length; j++) {
        if (SETTINGS.INITIAL_MAP[i][j] === " ") {
          this.map[i][j] = new Tile(i, j);
        } else {
          this.map[i][j] = new Boundary(i, j);
        }
      }
    }
  }

  /**
   * Calculate the dimensions and positions of the board
   */
  calculateBoardDimensions() {
    // Map total Width and Height
    this.mapWidth = this.map[0].length * SETTINGS.TILE_SIZE;
    this.mapHeight = this.map.length * SETTINGS.TILE_SIZE;
    
    // Map Start x and y (game field)
    this.gameFieldX = this.canvasCenterX / 2 / 2 + 60;
    this.gameFieldY = this.canvasCenterY / 4;
    
    // Map End x and y
    this.gameFieldEndX = (this.map[0].length * SETTINGS.TILE_SIZE) + (SETTINGS.TILE_SIZE * 3);
    this.gameFieldEndY = (this.map.length * SETTINGS.TILE_SIZE) + (SETTINGS.TILE_SIZE * 2);
    
    // Playfield Width and Height (inner area)
    this.playFieldWidth = this.mapWidth - SETTINGS.TILE_SIZE * 2;
    this.playFieldHeight = this.mapHeight - SETTINGS.TILE_SIZE * 2;
    
    // Playfield Start x and y (inner area start)
    this.playFieldStartX = this.gameFieldX + SETTINGS.TILE_SIZE;
    this.playFieldStartY = this.gameFieldY + SETTINGS.TILE_SIZE;
  }

  /**
   * Draw the board on the canvas
   */
  draw() {
    const startX = this.gameFieldX;
    const startY = this.gameFieldY;
    
    // Get the tile images
    const grassFullImg = assetManager.getImage('grassTile');
    const dirtLightImg = assetManager.getImage('dirtLightTile');
    const dirtDarkImg = assetManager.getImage('dirtDarkTile');
    const stoneImg = assetManager.getImage('stoneTile');
    
    // Draw each tile
    this.map.forEach((row) => {
      row.forEach((tile) => {
        if (tile instanceof Tile) {
          // Draw Tile based on health
          switch (tile.health) {
            case 3:
              this.context.shadowBlur = 10;
              this.context.shadowColor = "black";
              this.context.drawImage(
                grassFullImg, 
                startX + (tile.col * tile.size), 
                startY + (tile.row * tile.size), 
                tile.size, 
                tile.size
              );
              break;
            case 2:
              this.context.shadowBlur = 10;
              this.context.shadowColor = "black";
              this.context.drawImage(
                dirtLightImg, 
                startX + (tile.col * tile.size), 
                startY + (tile.row * tile.size), 
                tile.size, 
                tile.size
              );
              break;
            case 1:
              this.context.shadowBlur = 10;
              this.context.shadowColor = "black";
              this.context.drawImage(
                dirtDarkImg, 
                startX + (tile.col * tile.size), 
                startY + (tile.row * tile.size), 
                tile.size, 
                tile.size
              );
              break;
            case 0:
              // Draw empty tile
              this.context.globalAlpha = 0.0;
              this.context.fillStyle = "#ffebcd";
              this.context.fillRect(
                startX + (tile.col * tile.size), 
                startY + (tile.row * tile.size), 
                tile.size, 
                tile.size
              );
              this.context.lineWidth = 2;
              this.context.strokeStyle = "black";
              this.context.strokeRect(
                startX + (tile.col * tile.size), 
                startY + (tile.row * tile.size), 
                tile.size, 
                tile.size
              );
              this.context.globalAlpha = 1;
              break;
          }
        } else if (tile instanceof Boundary) {
          // Draw Boundary
          this.context.drawImage(
            stoneImg, 
            startX + (tile.col * tile.size), 
            startY + (tile.row * tile.size), 
            tile.size, 
            tile.size
          );
        }
      });
    });
  }

  /**
   * Shrink the play field
   */
  shrinkPlayField() {
    this.shrinkCounter++;
    
    // Check if we've reached the maximum number of shrinks
    if (this.shrinkCounter >= 6) {
      this.gameover = true;
      return;
    }
    
    // Remove top row
    this.map.shift();
    
    // Remove bottom row
    this.map.pop();
    
    // Remove leftmost column for each row
    for (let row of this.map) {
      row.shift();
    }
    
    // Remove rightmost column for each row
    for (let row of this.map) {
      row.pop();
    }
    
    // Replace the top row with new Boundary instances
    for (let col = 0; col < this.map[0].length; col++) {
      this.map[0][col] = new Boundary(0, col);
    }
    
    // Replace the bottom row with new Boundary instances
    let lastRow = this.map.length - 1;
    for (let col = 0; col < this.map[lastRow].length; col++) {
      this.map[lastRow][col] = new Boundary(lastRow, col);
    }
    
    // Replace the leftmost column with new Boundary instances
    for (let row = 0; row < this.map.length; row++) {
      this.map[row][0] = new Boundary(row, 0);
    }
    
    // Replace the rightmost column with new Boundary instances
    let lastCol = this.map[0].length - 1;
    for (let row = 0; row < this.map.length; row++) {
      this.map[row][lastCol] = new Boundary(row, lastCol);
    }
    
    // Update the rows and cols of all Tile instances
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        const tile = this.map[i][j];
        if (tile instanceof Tile) {
          tile.row = i;
          tile.col = j;
        }
      }
    }
    
    // Update board dimensions
    this.mapWidth = this.map[0].length * SETTINGS.TILE_SIZE;
    this.mapHeight = this.map.length * SETTINGS.TILE_SIZE;
    
    // Update board positions
    this.gameFieldX += 50;
    this.gameFieldY += 50;
    
    this.gameFieldEndX -= 50;
    this.gameFieldEndY -= 50;
    
    this.playFieldStartX += 50;
    this.playFieldStartY += 50;
  }

  /**
   * Start the game timer
   */
  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.timer += 1;
        if (this.timer % SETTINGS.SHRINK_INTERVAL === 0) {
          this.shrinkPlayField();
        }
      }, 1000);
    }
  }

  /**
   * Stop the game timer
   */
  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Reset the board to its initial state
   */
  reset() {
    // Reset game state
    this.timer = 0;
    this.shrinkCounter = 0;
    this.gameover = false;
    
    // Reinitialize the map
    this.initializeMap();
    
    // Recalculate dimensions
    this.canvasCenterX = this.canvas.width / 2;
    this.canvasCenterY = this.canvas.height / 2;
    
    this.calculateBoardDimensions();
    
    // Stop any existing timer
    this.stopTimer();
  }
}

export default Board;