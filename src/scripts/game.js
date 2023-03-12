import Board from './board.js'
import Player from './player.js'

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

const player = new Player({
    position: {
        x: 400,
        y: 400
    },
    velocity: {
        x: 0,
        y: 0
    }
})

const board = new Board;

let lastKey = ''

const keys = {
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
            keys.w.pressed = true
            lastKey = 'w'
            player.velocity.y = -3 // set the y-velocity to move upward
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            player.velocity.x = -3 // set the x-velocity to move left
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            player.velocity.y = 3 // set the y-velocity to move downward
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            player.velocity.x = 3 // set the x-velocity to move right
            break
    }
    // console.log(keys.d.pressed)
    // console.log(keys.s.pressed)
})

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'w':
            keys.w.pressed = false
            player.velocity.y = 0 // reset the y-velocity to 0
            break
        case 'a':
            keys.a.pressed = false
            player.velocity.x = 0 // reset the x-velocity to 0
            break
        case 's':
            keys.s.pressed = false
            player.velocity.y = 0 // reset the y-velocity to 0
            break
        case 'd':
            keys.d.pressed = false
            player.velocity.x = 0 // reset the x-velocity to 0
            break
        }
        // console.log(keys.d.pressed)
        // console.log(keys.s.pressed)
})

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    board.draw();
    player.update();
}

animate();