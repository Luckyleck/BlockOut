import SETTINGS from '../constants/settings.js';

/**
 * Asset manager for loading and caching game assets
 */
class AssetManager {
  constructor() {
    this.images = {};
    this.loaded = false;
    this.loadPromise = null;
  }

  /**
   * Load all game assets
   * @returns {Promise} A promise that resolves when all assets are loaded
   */
  loadAssets() {
    if (this.loadPromise) {
      return this.loadPromise;
    }

    const assetPaths = {
      // Tile images
      grassTile: SETTINGS.ASSETS.TILES.GRASS,
      dirtLightTile: SETTINGS.ASSETS.TILES.DIRT_LIGHT,
      dirtDarkTile: SETTINGS.ASSETS.TILES.DIRT_DARK,
      stoneTile: SETTINGS.ASSETS.TILES.STONE,
      
      // Player 1 (Red) images
      shovelRedRight: SETTINGS.ASSETS.SHOVELS.RED_RIGHT,
      shovelRedLeft: SETTINGS.ASSETS.SHOVELS.RED_LEFT,
      shovelRedDown: SETTINGS.ASSETS.SHOVELS.RED_DOWN,
      
      // Player 2 (Blue) images
      shovelBlueRight: SETTINGS.ASSETS.SHOVELS.BLUE_RIGHT,
      shovelBlueLeft: SETTINGS.ASSETS.SHOVELS.BLUE_LEFT,
      shovelBlueDown: SETTINGS.ASSETS.SHOVELS.BLUE_DOWN,
      
      // AI (Yellow) images
      shovelYellowRight: SETTINGS.ASSETS.SHOVELS.YELLOW_RIGHT,
      shovelYellowLeft: SETTINGS.ASSETS.SHOVELS.YELLOW_LEFT,
      shovelYellowDown: SETTINGS.ASSETS.SHOVELS.YELLOW_DOWN
    };

    // Load all images
    const imagePromises = Object.entries(assetPaths).map(([key, path]) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.images[key] = img;
          resolve();
        };
        img.onerror = () => reject(new Error(`Failed to load image: ${path}`));
        img.src = path;
      });
    });

    this.loadPromise = Promise.all(imagePromises)
      .then(() => {
        this.loaded = true;
        console.log('All assets loaded successfully');
      })
      .catch(error => {
        console.error('Error loading assets:', error);
        throw error;
      });

    return this.loadPromise;
  }

  /**
   * Get an image by key
   * @param {string} key - The key of the image to get
   * @returns {HTMLImageElement} The image
   */
  getImage(key) {
    if (!this.loaded) {
      console.warn('Assets not loaded yet. Call loadAssets() first.');
    }
    return this.images[key];
  }
}

// Create and export a singleton instance
const assetManager = new AssetManager();
export default assetManager;