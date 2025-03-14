import Entity from './entity.js';
import assetManager from '../core/assets.js';
import SETTINGS from '../constants/settings.js';

/**
 * Player class for human-controlled entities
 */
class Player extends Entity {
  /**
   * Create a new player
   * @param {number} x - The x position
   * @param {number} y - The y position
   * @param {Object} board - The game board
   * @param {string} type - The player type ('player1', 'player2')
   */
  constructor(x, y, board, type = 'player1') {
    super(x, y, board);
    
    this.type = type;
    this.controls = this.type === 'player1' 
      ? SETTINGS.PLAYER_ONE_CONTROLS 
      : SETTINGS.PLAYER_TWO_CONTROLS;
    
    // Set up event listeners for player controls
    this.setupControls();
  }

  /**
   * Set up keyboard event listeners
   */
  setupControls() {
    // Remove previous listeners if they exist
    if (this.keydownHandler) {
      window.removeEventListener('keydown', this.keydownHandler);
    }
    
    // Create a new keydown handler
    this.keydownHandler = (event) => {
      const { key } = event;
      
      // Handle movement
      if (key === this.controls.UP) {
        this.move('up');
      } else if (key === this.controls.LEFT) {
        this.move('left');
      } else if (key === this.controls.DOWN) {
        this.move('down');
      } else if (key === this.controls.RIGHT) {
        this.move('right');
      } 
      // Handle breaking
      else if (key === this.controls.ACTION) {
        this.breakTile();
      }
    };
    
    // Add the event listener
    window.addEventListener('keydown', this.keydownHandler);
  }

  /**
   * Draw the player on the canvas
   * @param {CanvasRenderingContext2D} context - The canvas context
   */
  draw(context) {
    const image = this.getPlayerImage();
    
    if (image) {
      context.drawImage(image, this.x - 20, this.y - 20, 40, 40);
    }
  }

  /**
   * Get the appropriate player image based on direction and type
   * @returns {HTMLImageElement} The player image
   */
  getPlayerImage() {
    const color = this.type === 'player1' ? 'Red' : 'Blue';
    
    switch (this.direction) {
      case 'right':
        return assetManager.getImage(`shovel${color}Right`);
      case 'left':
        return assetManager.getImage(`shovel${color}Left`);
      case 'down':
        return assetManager.getImage(`shovel${color}Down`);
      case 'up':
        // Use right image for up since there is no dedicated up image
        return assetManager.getImage(`shovel${color}Right`);
      default:
        return assetManager.getImage(`shovel${color}Right`);
    }
  }

  /**
   * Clean up event listeners when the player is removed
   */
  cleanup() {
    if (this.keydownHandler) {
      window.removeEventListener('keydown', this.keydownHandler);
      this.keydownHandler = null;
    }
  }
}

export default Player;