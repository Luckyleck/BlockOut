import { Tile, Boundary } from './tile-manager.js';
import SETTINGS from '../constants/settings.js';

/**
 * Utility functions for collision detection
 */
const CollisionUtils = {
  /**
   * Check if an entity will fall through a tile
   * @param {Object} entity - The entity to check
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board coordinates
   * @returns {boolean} True if the entity will fall through the tile
   */
  checkFallThrough(entity, map, boardCoordinates) {
    const [row, col] = this.getEntityTilePosition(entity, boardCoordinates);
    
    // Check if within map bounds
    if (row < 0 || row >= map.length || col < 0 || col >= map[0].length) {
      return true;
    }
    
    const tile = map[row][col];
    
    // Entity will fall if it's on a tile with 0 health or on a boundary
    return tile instanceof Tile && tile.health === 0;
  },
  
  /**
   * Check if an entity is on a boundary
   * @param {Object} entity - The entity to check
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board coordinates
   * @returns {boolean} True if the entity is on a boundary
   */
  isOnBoundary(entity, map, boardCoordinates) {
    const [row, col] = this.getEntityTilePosition(entity, boardCoordinates);
    
    // Check if within map bounds
    if (row < 0 || row >= map.length || col < 0 || col >= map[0].length) {
      return true;
    }
    
    return map[row][col] instanceof Boundary;
  },
  
  /**
   * Get the tile position of an entity
   * @param {Object} entity - The entity
   * @param {Object} boardCoordinates - The board coordinates
   * @returns {Array} The [row, col] position of the entity
   */
  getEntityTilePosition(entity, boardCoordinates) {
    const row = Math.floor((entity.y - boardCoordinates.playFieldStartY) / SETTINGS.TILE_SIZE + 1);
    const col = Math.floor((entity.x - boardCoordinates.playFieldStartX) / SETTINGS.TILE_SIZE + 1);
    return [row, col];
  },
  
  /**
   * Check if a move is valid (won't go out of bounds or onto an occupied tile)
   * @param {Object} entity - The entity
   * @param {number} newX - The new x position
   * @param {number} newY - The new y position
   * @param {Array} map - The game map
   * @param {Object} boardCoordinates - The board coordinates
   * @returns {boolean} True if the move is valid
   */
  isValidMove(entity, newX, newY, map, boardCoordinates) {
    const [row, col] = this.getEntityTilePositionFromCoords(newX, newY, boardCoordinates);
    
    // Check if within map bounds
    if (row < 0 || row >= map.length || col < 0 || col >= map[0].length) {
      return false;
    }
    
    const tile = map[row][col];
    
    // Valid move if it's a tile with health > 0 and not occupied
    return tile instanceof Tile && tile.health > 0 && !tile.occupied;
  },
  
  /**
   * Get the tile position from coordinates
   * @param {number} x - The x position
   * @param {number} y - The y position
   * @param {Object} boardCoordinates - The board coordinates
   * @returns {Array} The [row, col] position
   */
  getEntityTilePositionFromCoords(x, y, boardCoordinates) {
    const row = Math.floor((y - boardCoordinates.playFieldStartY) / SETTINGS.TILE_SIZE + 1);
    const col = Math.floor((x - boardCoordinates.playFieldStartX) / SETTINGS.TILE_SIZE + 1);
    return [row, col];
  }
};

export default CollisionUtils;