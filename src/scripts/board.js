import Tile from './tile.js'
import Boundary from './boundary.js'

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")

c.fillRect(20, 20, 20, 20)

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
                if (Board.map[i][j] = " ") {
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

}

export default Board;

