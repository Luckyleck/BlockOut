const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

class Player {

    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 15

    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'yellow'
        c.fill();
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

export default Player;