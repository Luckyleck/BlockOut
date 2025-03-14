import Board from './board.js';
import Player from '../entities/player.js';
import AI from '../entities/ai.js';
import assetManager from './assets.js';
import SETTINGS from '../constants/settings.js';

/**
 * Game class that controls the game flow
 */
class Game {
  constructor() {
    // DOM elements
    this.canvas = document.getElementById(SETTINGS.CANVAS_ID);
    this.context = this.canvas.getContext('2d');
    this.spawnBtnPlayer = document.getElementById('spawn-btn-player');
    this.spawnBtnAI = document.getElementById('spawn-btn-ai');
    this.playAgain = document.getElementById('play-again');
    this.winMessage = document.getElementById('win-message');
    
    // Game components
    this.board = null;
    this.playerOne = null;
    this.playerTwo = null;
    
    // Animation frame ID
    this.animationId = null;
    
    // Initialize the game
    this.init();
  }

  /**
   * Initialize the game
   */
  init() {
    // Load assets before setting up the game
    assetManager.loadAssets().then(() => {
      this.setupEventListeners();
      this.hideButtons([this.playAgain, this.winMessage]);
    }).catch(error => {
      console.error('Failed to load game assets:', error);
    });
  }

  /**
   * Set up event listeners for buttons
   */
  setupEventListeners() {
    this.spawnBtnPlayer.addEventListener('click', () => {
      this.startMultiplayerGame();
      this.hideButtons([this.spawnBtnPlayer, this.spawnBtnAI, this.playAgain, this.winMessage]);
    });
    
    this.spawnBtnAI.addEventListener('click', () => {
      this.startSinglePlayerGame();
      this.hideButtons([this.spawnBtnPlayer, this.spawnBtnAI, this.playAgain, this.winMessage]);
    });
    
    this.playAgain.addEventListener('click', () => {
      if (this.playerTwo instanceof AI) {
        this.startSinglePlayerGame();
      } else {
        this.startMultiplayerGame();
      }
      this.hideButtons([this.spawnBtnPlayer, this.spawnBtnAI, this.playAgain, this.winMessage]);
    });
  }

  /**
   * Hide specified buttons
   * @param {Array} buttons - Array of buttons to hide
   */
  hideButtons(buttons) {
    buttons.forEach(button => {
      if (button) {
        button.style.display = 'none';
      }
    });
  }

  /**
   * Show specified buttons
   * @param {Array} buttons - Array of buttons to show
   */
  showButtons(buttons) {
    buttons.forEach(button => {
      if (button) {
        button.style.display = 'block';
      }
    });
  }

  /**
   * Start a multiplayer game (player vs player)
   */
  startMultiplayerGame() {
    this.cleanupExistingGame();
    
    // Create new board
    this.board = new Board(this.canvas);
    
    // Create players
    this.playerOne = new Player(
      SETTINGS.PLAYER_ONE_SPAWN_X,
      SETTINGS.PLAYER_ONE_SPAWN_Y,
      this.board,
      'player1'
    );
    
    this.playerTwo = new Player(
      SETTINGS.PLAYER_TWO_SPAWN_X,
      SETTINGS.PLAYER_TWO_SPAWN_Y,
      this.board,
      'player2'
    );
    
    // Start the game
    this.board.startTimer();
    this.animateMultiplayer();
  }

  /**
   * Start a single player game (player vs AI)
   */
  startSinglePlayerGame() {
    this.cleanupExistingGame();
    
    // Create new board
    this.board = new Board(this.canvas);
    
    // Create player and AI
    this.playerOne = new Player(
      SETTINGS.PLAYER_ONE_SPAWN_X,
      SETTINGS.PLAYER_ONE_SPAWN_Y,
      this.board,
      'player1'
    );
    
    this.playerTwo = new AI(
      SETTINGS.AI_SPAWN_X,
      SETTINGS.AI_SPAWN_Y,
      this.board
    );
    
    // Set player as AI's target
    this.playerTwo.setTargetPlayer(this.playerOne);
    
    // Start the game
    this.board.startTimer();
    this.playerTwo.startAI();
    this.animateSinglePlayer();
  }

  /**
   * Clean up existing game components
   */
  cleanupExistingGame() {
    // Cancel animation frame
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // Clean up existing components
    if (this.board) {
      this.board.stopTimer();
    }
    
    if (this.playerOne) {
      this.playerOne.cleanup && this.playerOne.cleanup();
    }
    
    if (this.playerTwo) {
      this.playerTwo.cleanup && this.playerTwo.cleanup();
    }
    
    // Reset references
    this.board = null;
    this.playerOne = null;
    this.playerTwo = null;
  }

  /**
   * Animation loop for multiplayer games
   */
  animateMultiplayer() {
    this.animationId = requestAnimationFrame(() => this.animateMultiplayer());
    
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Check if game is over due to shrinking
    if (this.board.gameover && this.playerOne.alive && this.playerTwo.alive) {
      this.board.draw();
      this.endGame('draw');
      return;
    }
    
    // Draw the board
    this.board.draw();
    
    // Update players
    this.playerOne.checkAliveStatus();
    this.playerTwo.checkAliveStatus();
    
    // Draw players if alive
    if (this.playerOne.alive) {
      this.playerOne.draw(this.context);
    }
    
    if (this.playerTwo.alive) {
      this.playerTwo.draw(this.context);
    }
    
    // Check game end conditions
    if (!this.playerOne.alive && !this.playerTwo.alive) {
      this.endGame('draw');
      return;
    }
    
    if (!this.playerOne.alive) {
      this.playerTwo.draw(this.context);
      this.endGame('Blue');
      return;
    }
    
    if (!this.playerTwo.alive) {
      this.playerOne.draw(this.context);
      this.endGame('Red');
      return;
    }
  }

  /**
   * Animation loop for single player games
   */
  animateSinglePlayer() {
    this.animationId = requestAnimationFrame(() => this.animateSinglePlayer());
    
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Check if game is over due to shrinking
    if (this.board.gameover && this.playerOne.alive && this.playerTwo.alive) {
      this.board.draw();
      this.endGame('draw');
      return;
    }
    
    // Draw the board
    this.board.draw();
    
    // Update players
    this.playerOne.checkAliveStatus();
    this.playerTwo.checkAliveStatus();
    
    // Draw players if alive
    if (this.playerOne.alive) {
      this.playerOne.draw(this.context);
    }
    
    if (this.playerTwo.alive) {
      this.playerTwo.draw(this.context);
    }
    
    // Check game end conditions
    if (!this.playerOne.alive && !this.playerTwo.alive) {
      this.endGame('draw');
      return;
    }
    
    if (!this.playerOne.alive) {
      this.playerTwo.draw(this.context);
      this.endGame('Rambo');
      return;
    }
    
    if (!this.playerTwo.alive) {
      this.playerOne.draw(this.context);
      this.endGame('Player');
      return;
    }
  }

  /**
   * End the game and show result
   * @param {string} winner - The winner of the game
   */
  endGame(winner) {
    // Cancel animation frame
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // Stop board timer
    this.board.stopTimer();
    
    // Stop AI if present
    if (this.playerTwo instanceof AI) {
      this.playerTwo.stopAI();
    }
    
    // Display winner message
    if (winner === 'draw') {
      this.winMessage.innerText = `It's a draw!`;
    } else {
      this.winMessage.innerText = `${winner} wins!`;
    }
    
    // Show buttons
    this.showButtons([this.winMessage, this.spawnBtnPlayer, this.spawnBtnAI, this.playAgain]);
  }
}

export default Game;