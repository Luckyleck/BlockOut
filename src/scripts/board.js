import Tile from './tile.js'
import Boundary from './boundary.js'

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")

// c.fillRect(20, 20, 20, 20)

class Board {

    static tiles = []

    static map = [
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

    constructor() {

        this.tiles = []

        for (let i = 0; i < Board.map.length; i++) {
            for (let j = 0; j < Board.map[i].length; j++) {
                if (Board.map[i][j] === " ") {
                    Board.map[i][j] = new Tile(
                        i, // x
                        j  // y
                    )
                } else {
                    Board.map[i][j] = new Boundary(
                        i, // x
                        j  // y
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
                console.log(tile)
                c.fillStyle = 'green';
                c.fillRect(startX + (tile.x * tile.size), startY + (tile.y * tile.size), tile.size, tile.size);
                c.lineWidth = 2;
                c.strokeStyle = 'black';
                c.strokeRect(startX + (tile.x * tile.size), startY + (tile.y * tile.size), tile.size, tile.size);
            })
        })
    }
}

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse)
})


const board = new Board;
board.draw();


export default Board;


