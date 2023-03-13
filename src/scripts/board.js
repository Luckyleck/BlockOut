import Tile from './tile.js'
import Boundary from './boundary.js'
import Player from './player.js'

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")

// c.fillRect(20, 20, 20, 20)

class Board {

    static tiles = []

    static map = [ // Right side is actually bottom
        ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ]


    
    // Map total Width and Height
    static mapWidth = Board.map[0].length * Tile.size
    static mapHeight = Board.map.length * Tile.size
    
    // Map Start x and y
    static canvasStartX = canvas.width / 4; //300
    static canvasStartY = canvas.height / 8; //100
    
    // Playfield Width and Height
    static playFieldWidth = Board.mapWidth - (Tile.size * 2)
    static playFieldHeight = Board.mapHeight - (Tile.size * 2)

    // Playfield Start x and y
    static playFieldStartX = Board.canvasStartX + Tile.size;
    static playFieldStartY = Board.canvasStartY + Tile.size;


    constructor() {
        // this.tiles = []
        for (let i = 0; i < Board.map.length; i++) {
            for (let j = 0; j < Board.map[i].length; j++) {
                if (Board.map[i][j] === " ") {
                    Board.map[i][j] = new Tile(
                        i, // row
                        j  // col
                    )
                } else {
                    Board.map[i][j] = new Boundary(
                        i, // row
                        j  // col
                    )
                }
            }
        }
    }

    draw() {

        const startX = canvas.width / 4
        const startY = canvas.height / 8

        Board.map.forEach((row) => {
            row.forEach((tile) => {
                if (tile instanceof Tile) {
                    console.log(tile.row, tile.col)
                    c.fillStyle = 'green';
                    c.fillRect(startX + (tile.row * tile.size), startY + (tile.col * tile.size), tile.size, tile.size);
                    c.lineWidth = 2;
                    c.strokeStyle = 'black';
                    c.strokeRect(startX + (tile.row * tile.size), startY + (tile.col * tile.size), tile.size, tile.size);
                } else {
                    c.fillStyle = 'blue';
                    c.fillRect(startX + (tile.row * tile.size), startY + (tile.col * tile.size), tile.size, tile.size);
                    c.lineWidth = 2;
                    c.strokeStyle = 'black';
                    c.strokeRect(startX + (tile.row * tile.size), startY + (tile.col * tile.size), tile.size, tile.size);
                }
            })
        })
    }

    // getSurroundingBlocks

    // checkPlayerDirection

    // updateSurroundBlock(s)

}

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log(mouse)
    })

window.addEventListener("mousemove", function (event) {
    const canvasStartX = canvas.width / 4;
    const canvasStartY = canvas.height / 8;
    const tileWidth = Board.map[0][0].size;
    const tileHeight = Board.map[0][0].size;

    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    const tileX = Math.floor((mouseX - canvasStartX) / tileWidth);
    const tileY = Math.floor((mouseY - canvasStartY) / tileHeight);

    if (tileX >= 0 && tileX < Board.map[0].length && tileY >= 0 && tileY < Board.map.length) {
      const tile = Board.map[tileY][tileX];
    //   console.log(tile);
    }
});

// var gridSize = 25;
// var lineColor = "#ccc";

// // Draw the grid lines
// c.beginPath();
// for (var x = 0; x <= canvas.width; x += gridSize) {
//   c.moveTo(x, 0);
//   c.lineTo(x, canvas.height);
// }
// for (var y = 0; y <= canvas.height; y += gridSize) {
//   c.moveTo(0, y);
//   c.lineTo(canvas.width, y);
// }
// c.strokeStyle = lineColor;
// c.stroke();




export default Board;


