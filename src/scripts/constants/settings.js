/**
 * Global game settings and constants
 */

const SETTINGS = {
    // Tile settings
    TILE_SIZE: 50,
    
    // Game field settings
    INITIAL_MAP: [
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
      ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
    ],
    
    // Canvas element
    CANVAS_ID: "canvas",
    
    // Player settings
    PLAYER_RADIUS: 15,
    PLAYER_HEALTH: 3,
    
    // Player spawn positions
    PLAYER_ONE_SPAWN_X: 285,
    PLAYER_ONE_SPAWN_Y: 175,
    PLAYER_TWO_SPAWN_X: 935,
    PLAYER_TWO_SPAWN_Y: 675,
    AI_SPAWN_X: 825,
    AI_SPAWN_Y: 625,
    
    // Game timing
    SHRINK_INTERVAL: 5, // seconds
    AI_MOVE_DELAY: 200, // milliseconds
    
    // Controls
    PLAYER_ONE_CONTROLS: {
      UP: 'w',
      LEFT: 'a',
      DOWN: 's',
      RIGHT: 'd',
      ACTION: ' ' // space
    },
    
    PLAYER_TWO_CONTROLS: {
      UP: 'ArrowUp',
      LEFT: 'ArrowLeft',
      DOWN: 'ArrowDown',
      RIGHT: 'ArrowRight',
      ACTION: 'Enter'
    },
    
    // Asset paths
    ASSETS: {
      TILES: {
        GRASS: "./images/tiles/grass.png",
        DIRT_LIGHT: "./images/tiles/dirt_light.png",
        DIRT_DARK: "./images/tiles/dirt_dark.png",
        STONE: "./images/tiles/stone_pink.png"
      },
      SHOVELS: {
        RED_RIGHT: "./images/shovels/Shovel_Red_Right.png",
        RED_LEFT: "./images/shovels/Shovel_Red_Left.png",
        RED_DOWN: "./images/shovels/Shovel_Red_Down.png",
        BLUE_RIGHT: "./images/shovels/Shovel_Blue_Right.png",
        BLUE_LEFT: "./images/shovels/Shovel_Blue_Left.png",
        BLUE_DOWN: "./images/shovels/Shovel_Blue_Down.png",
        YELLOW_RIGHT: "./images/shovels/Shovel_Yellow_Right.png",
        YELLOW_LEFT: "./images/shovels/Shovel_Yellow_Left.png",
        YELLOW_DOWN: "./images/shovels/Shovel_Yellow_Down.png"
      }
    }
  };
  
  export default SETTINGS;