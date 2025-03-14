import SETTINGS from '../constants/settings.js';

/**
 * Represents a regular tile that can be broken
 */
export class Tile {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.size = SETTINGS.TILE_SIZE;
    this.health = 3;
    this.visible = true;
    this.occupied = false;
  }
}

/**
 * Represents a boundary tile that cannot be broken
 */
export class Boundary {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.size = SETTINGS.TILE_SIZE;
    this.occupied = false;
  }
}

/**
 * TileManager handles tile-related operations
 */
class TileManager {
  /**
   * Get the position of a tile on the canvas
   * @param {number} row - The row of the tile
   * @param {number} col - The column of the tile
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {Object} The x and y position of the tile
   */
  getTilePosition(row, col, boardCoordinates) {
    return {
      x: boardCoordinates.gameFieldX + col * SETTINGS.TILE_SIZE,
      y: boardCoordinates.gameFieldY + row * SETTINGS.TILE_SIZE
    };
  }

  /**
   * Get the row and column of a tile from canvas coordinates
   * @param {number} x - The x position on the canvas
   * @param {number} y - The y position on the canvas
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {Array} The [row, col] of the tile
   */
  getTileCoordinates(x, y, boardCoordinates) {
    const row = Math.floor((y - boardCoordinates.playFieldStartY) / SETTINGS.TILE_SIZE + 1);
    const col = Math.floor((x - boardCoordinates.playFieldStartX) / SETTINGS.TILE_SIZE + 1);
    return [row, col];
  }

  /**
   * Get a tile at specified canvas coordinates
   * @param {number} x - The x position on the canvas
   * @param {number} y - The y position on the canvas
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {Tile|Boundary|null} The tile at the position, or null if out of bounds
   */
  getTileAtPosition(x, y, map, boardCoordinates) {
    const [row, col] = this.getTileCoordinates(x, y, boardCoordinates);
    
    // Check if the coordinates are within the map bounds
    if (row >= 0 && row < map.length && col >= 0 && col < map[0].length) {
      return map[row][col];
    }
    return null;
  }

  /**
   * Check if a position has a valid tile (not a boundary and not broken)
   * @param {number} x - The x position on the canvas
   * @param {number} y - The y position on the canvas
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {boolean} True if the position has a valid tile
   */
  isValidTile(x, y, map, boardCoordinates) {
    const tile = this.getTileAtPosition(x, y, map, boardCoordinates);
    return tile instanceof Tile && tile.health > 0;
  }

  /**
   * Check if a move to a position is valid
   * @param {number} x - The x position on the canvas
   * @param {number} y - The y position on the canvas
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {boolean} True if the move is valid
   */
  isValidMove(x, y, map, boardCoordinates) {
    const tile = this.getTileAtPosition(x, y, map, boardCoordinates);
    return tile instanceof Tile && tile.health > 0 && !tile.occupied;
  }

  /**
   * Break a tile at the specified position
   * @param {number} x - The x position on the canvas
   * @param {number} y - The y position on the canvas
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board's coordinate system
   * @returns {boolean} True if the tile was broken, false otherwise
   */
  breakTile(x, y, map, boardCoordinates) {
    const tile = this.getTileAtPosition(x, y, map, boardCoordinates);
    
    if (tile instanceof Tile && tile.health > 0) {
      tile.health -= 1;
      
      if (tile.health === 0) {
        tile.visible = false;
        return tile.occupied; // Return true if an entity was on this tile
      }
    }
    
    return false;
  }
}

// Create and export a singleton instance
const tileManager = new TileManager();
export default tileManager;