import tileManager, { Tile, Boundary } from '../utils/tile-manager.js';
import CollisionUtils from '../utils/collision.js';
import SETTINGS from '../constants/settings.js';

/**
 * Base class for all game entities
 */
class Entity {
  /**
   * Create a new entity
   * @param {number} x - The x position
   * @param {number} y - The y position
   * @param {Object} board - The game board
   */
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.radius = SETTINGS.PLAYER_RADIUS;
    this.alive = true;
    this.victory = false;
    this.direction = 'right';
    this.lastKey = '';
    
    // Mark current tile as occupied
    this.updateTileOccupancy(true);
  }

  /**
   * Draw the entity
   * @param {CanvasRenderingContext2D} context - The canvas context
   */
  draw(context) {
    // To be implemented by subclasses
  }

  /**
   * Move the entity
   * @param {string} direction - The direction to move
   * @returns {boolean} - Whether the move was successful
   */
  move(direction) {
    if (!this.alive) return false;

    let newX = this.x;
    let newY = this.y;
    
    switch (direction) {
      case 'up':
        newY -= SETTINGS.TILE_SIZE;
        break;
      case 'left':
        newX -= SETTINGS.TILE_SIZE;
        break;
      case 'down':
        newY += SETTINGS.TILE_SIZE;
        break;
      case 'right':
        newX += SETTINGS.TILE_SIZE;
        break;
    }
    
    // Check if the move is valid
    if (!CollisionUtils.isValidMove(this, newX, newY, this.board.map, this.board)) {
      return false;
    }
    
    // Update occupation status
    this.updateTileOccupancy(false);
    
    // Update position
    this.x = newX;
    this.y = newY;
    this.direction = direction;
    this.lastKey = direction;
    
    // Update new tile occupation
    this.updateTileOccupancy(true);
    
    // Check if entity should die
    this.checkAliveStatus();
    
    return true;
  }

  /**
   * Break a tile in the given direction
   * @param {string} direction - The direction to break
   * @returns {boolean} - Whether a tile was broken
   */
  breakTile(direction) {
    if (!this.alive) return false;

    let targetX = this.x;
    let targetY = this.y;
    
    switch (direction || this.lastKey) {
      case 'up':
        targetY -= SETTINGS.TILE_SIZE;
        break;
      case 'left':
        targetX -= SETTINGS.TILE_SIZE;
        break;
      case 'down':
        targetY += SETTINGS.TILE_SIZE;
        break;
      case 'right':
        targetX += SETTINGS.TILE_SIZE;
        break;
    }
    
    const tile = tileManager.getTileAtPosition(
      targetX, 
      targetY, 
      this.board.map,
      this.board
    );
    
    if (!(tile instanceof Tile) || tile.health <= 0) {
      return false;
    }
    
    // Break the tile
    tile.health -= 1;
    
    if (tile.health === 0) {
      tile.visible = false;
      
      // If the tile was occupied, the occupier is dead
      if (tile.occupied) {
        this.victory = true;
        return true;
      }
    }
    
    return true;
  }

  /**
   * Update the occupation status of the current tile
   * @param {boolean} occupy - Whether to occupy or vacate the tile
   */
  updateTileOccupancy(occupy) {
    const tile = tileManager.getTileAtPosition(
      this.x, 
      this.y, 
      this.board.map,
      this.board
    );
    
    if (tile) {
      tile.occupied = occupy;
    }
  }

  /**
   * Check if the entity is still alive
   */
  checkAliveStatus() {
    // Check if on a broken tile
    const fallThrough = CollisionUtils.checkFallThrough(this, this.board.map, this.board);
    
    // Check if on a boundary
    const onBoundary = CollisionUtils.isOnBoundary(this, this.board.map, this.board);
    
    if (fallThrough || onBoundary) {
      this.alive = false;
    }
  }

  /**
   * Reset the entity
   */
  reset() {
    this.alive = true;
    this.victory = false;
    this.updateTileOccupancy(false);
  }

  /**
   * Get the current tile the entity is on
   * @returns {Tile|Boundary} The current tile
   */
  getCurrentTile() {
    return tileManager.getTileAtPosition(
      this.x, 
      this.y, 
      this.board.map,
      this.board
    );
  }
}

export default Entity;