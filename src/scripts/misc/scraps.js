const borderSize = 50;
const tileSize = 50;

const boardX = Board.canvasStartX + borderSize;
const boardY = Board.canvasStartY + borderSize;

const playerX = player.x - boardX;
const playerY = player.y - boardY;

const tileRow = Math.floor(playerY / tileSize) + 1;
const tileCol = Math.floor(playerX / tileSize) + 1;

console.log(`Player is on row ${tileRow} and col ${tileCol}`);
console.log(Board.playFieldStartX)
console.log(Board.playFieldStartY)
console.log(player.row)
console.log(player.col)