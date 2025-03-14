import Game from './scripts/core/game.js';

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing Block-Out game...');
  
  // Create the game instance - this will trigger the loading of assets
  // and setup the game
  const game = new Game();
});