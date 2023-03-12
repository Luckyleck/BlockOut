import Board from "./board.js"
import Tile from "./tile.js"

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

class Player {

    

    constructor(x, y) {
        this.x = x
        this.y = y
        this.dx;
        this.dy;
        this.radius = 15
        // this.row = Math.floor(Board.playFieldWidth/this.x)
        // this.col = Math.floor(Board.playFieldHeight/this.y)
        this.row = Math.floor((this.x - (Board.canvasStartX + 50)) / Tile.size)
        this.col = Math.floor((this.y - (Board.canvasStartY + 50)) / Tile.size)


        // const tileX = Math.floor((mouseX - canvasStartX) / tileWidth);
        // const tileY = Math.floor((mouseY - canvasStartY) / tileHeight);

        let lastKey = ''

        this.keys = {
            w: {
                pressed: false
            },
            a: {
                pressed: false
            },
            s: {
                pressed: false
            },
            d: {
                pressed: false
            }
        }

        window.addEventListener('keydown', ({ key }) => {
            switch (key) {
                case 'w':
                    this.keys.w.pressed = true
                    lastKey = 'w'
                    this.y -= 50 // set the y-velocity to move upward
                    // this.dy = -5
                    break
                case 'a':
                    this.keys.a.pressed = true
                    lastKey = 'a'
                    this.x -= 50 // set the x-velocity to move left
                    // this.dx = -5
                    break
                case 's':
                    this.keys.s.pressed = true
                    lastKey = 's'
                    this.y += 50 // set the y-velocity to move downward
                    // this.dy = 5
                    break
                case 'd':
                    this.keys.d.pressed = true
                    lastKey = 'd'
                    this.x += 50 // set the x-velocity to move right
                    // this.dx = 5
                    break
            }
            // console.log(keys.d.pressed)
            // console.log(keys.s.pressed)
        })
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill();
        c.closePath()
    }

    currentTile() {
        let row = Math.floor(Board.playFieldWidth/this.x)
        let col = Math.floor(Board.playFieldHeight/this.y)
        // console.log(`row: ${row} col: ${col}`)
    }

    // update() {
    //     this.draw()
    //     this.x += this.dx
    //     this.y += this.dy
    // }
}

export default Player;