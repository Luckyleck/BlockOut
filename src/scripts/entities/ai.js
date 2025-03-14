import Entity from './entity.js';
import assetManager from '../core/assets.js';
import tileManager from '../utils/tile-manager.js';
import SETTINGS from '../constants/settings.js';

/**
 * AI class for computer-controlled entities
 */
class AI extends Entity {
  /**
   * Create a new AI entity
   * @param {number} x - The x position
   * @param {number} y - The y position
   * @param {Object} board - The game board
   */
  constructor(x, y, board) {
    super(x, y, board);
    
    this.moveDelay = SETTINGS.AI_MOVE_DELAY;
    this.canMove = true;
    this.canBreak = true;
    this.moveTimer = null;
    this.breakTimer = null;
    this.targetPlayer = null;
  }

  /**
   * Set the target player for the AI to chase
   * @param {Player} player - The player to target
   */
  setTargetPlayer(player) {
    this.targetPlayer = player;
  }

  /**
   * Draw the AI on the canvas
   * @param {CanvasRenderingContext2D} context - The canvas context
   */
  draw(context) {
    const image = this.getAIImage();
    
    if (image) {
      context.drawImage(image, this.x - 20, this.y - 20, 40, 40);
    }
  }

  /**
   * Get the appropriate AI image based on direction
   * @returns {HTMLImageElement} The AI image
   */
  getAIImage() {
    switch (this.direction) {
      case 'right':
        return assetManager.getImage('shovelYellowRight');
      case 'left':
        return assetManager.getImage('shovelYellowLeft');
      case 'down':
        return assetManager.getImage('shovelYellowDown');
      case 'up':
        // Use right image for up since there is no dedicated up image
        return assetManager.getImage('shovelYellowRight');
      default:
        return assetManager.getImage('shovelYellowLeft');
    }
  }

  /**
   * Start the AI's decision-making process
   */
  startAI() {
    this.makeDecision();
  }

  /**
   * Stop the AI's decision-making process
   */
  stopAI() {
    clearTimeout(this.moveTimer);
    clearTimeout(this.breakTimer);
    this.moveTimer = null;
    this.breakTimer = null;
  }

  /**
   * Make a decision about what action to take
   */
  makeDecision() {
    if (!this.alive) return;
    
    // If we have a target player, try to move towards them with a chance to break tiles
    if (this.targetPlayer && this.targetPlayer.alive) {
      // 70% chance to move towards player, 30% chance to move randomly
      const shouldChase = Math.random() < 0.7;
      
      if (shouldChase) {
        this.moveTowardsPlayer();
      } else {
        this.moveRandomly();
      }
      
      // 40% chance to try breaking a tile
      if (Math.random() < 0.4) {
        this.attemptBreak();
      }
    } else {
      // No target or target is dead, move randomly
      this.moveRandomly();
      
      // 20% chance to try breaking a tile when moving randomly
      if (Math.random() < 0.2) {
        this.attemptBreak();
      }
    }
    
    // Schedule next decision
    this.moveTimer = setTimeout(() => this.makeDecision(), this.moveDelay);
  }

  /**
   * Move towards the target player
   */
  moveTowardsPlayer() {
    if (!this.canMove || !this.targetPlayer) return;
    
    // Calculate direction to player
    const dx = this.targetPlayer.x - this.x;
    const dy = this.targetPlayer.y - this.y;
    
    // Determine primary direction (horizontal or vertical)
    if (Math.abs(dx) > Math.abs(dy)) {
      // Move horizontally
      if (dx > 0) {
        if (!this.move('right')) {
          // If can't move right, try vertical
          this.moveVertically(dy);
        }
      } else {
        if (!this.move('left')) {
          // If can't move left, try vertical
          this.moveVertically(dy);
        }
      }
    } else {
      // Move vertically
      this.moveVertically(dy, () => {
        // If can't move vertically, try horizontal
        this.moveHorizontally(dx);
      });
    }
    
    // Throttle movement
    this.canMove = false;
    setTimeout(() => {
      this.canMove = true;
    }, this.moveDelay / 2);
  }

  /**
   * Helper to move vertically
   * @param {number} dy - The vertical distance to player
   * @param {Function} fallback - Function to call if movement fails
   */
  moveVertically(dy, fallback) {
    if (dy > 0) {
      if (!this.move('down') && fallback) {
        fallback();
      }
    } else {
      if (!this.move('up') && fallback) {
        fallback();
      }
    }
  }

  /**
   * Helper to move horizontally
   * @param {number} dx - The horizontal distance to player
   * @param {Function} fallback - Function to call if movement fails
   */
  moveHorizontally(dx, fallback) {
    if (dx > 0) {
      if (!this.move('right') && fallback) {
        fallback();
      }
    } else {
      if (!this.move('left') && fallback) {
        fallback();
      }
    }
  }

  /**
   * Move in a random direction
   */
  moveRandomly() {
    if (!this.canMove) return;
    
    const directions = ['up', 'left', 'down', 'right'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    this.move(randomDirection);
    
    // Throttle movement
    this.canMove = false;
    setTimeout(() => {
      this.canMove = true;
    }, this.moveDelay / 2);
  }

  /**
   * Attempt to break a tile
   */
  attemptBreak() {
    if (!this.canBreak) return;
    
    // If we have a target, try to break in their direction
    if (this.targetPlayer && this.targetPlayer.alive) {
      const dx = this.targetPlayer.x - this.x;
      const dy = this.targetPlayer.y - this.y;
      
      // Determine primary direction (horizontal or vertical)
      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal direction
        if (dx > 0) {
          this.breakTile('right');
        } else {
          this.breakTile('left');
        }
      } else {
        // Vertical direction
        if (dy > 0) {
          this.breakTile('down');
        } else {
          this.breakTile('up');
        }
      }
    } else {
      // No target, break in the current direction
      this.breakTile(this.direction);
    }
    
    // Throttle breaking
    this.canBreak = false;
    setTimeout(() => {
      this.canBreak = true;
    }, this.moveDelay);
  }
  
  /**
   * Clean up timers when the AI is removed
   */
  cleanup() {
    this.stopAI();
  }
}

export default AI;