import Board from './board.js'
import Player from './player.js'
import Playertwo from './playertwo.js'

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

const board = new Board;
Board.map.forEach(ele => console.log(ele))
// const player = new Player(375, 175)
console.log(Board.canvasStartX)
console.log(Board.canvasStartY)
const player = new Player(575, 275)
const player2 = new Playertwo(1075, 175)



// let lastKey = ''

// const keys = {
//     w: {
//         pressed: false
//     },
//     a: {
//         pressed: false
//     },
//     s: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     }
// }

// window.addEventListener('keydown', ({ key }) => {
//     switch (key) {
//         case 'w':
//             keys.w.pressed = true
//             lastKey = 'w'
//             player.velocity.y = -3 // set the y-velocity to move upward
//             player.y -= 3
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             player.velocity.x = -3 // set the x-velocity to move left
//             break
//         case 's':
//             keys.s.pressed = true
//             lastKey = 's'
//             player.velocity.y = 3 // set the y-velocity to move downward
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             player.velocity.x = 3 // set the x-velocity to move right
//             break
//     }
//     // console.log(keys.d.pressed)
//     // console.log(keys.s.pressed)
// })

// window.addEventListener('keyup', ({ key }) => {
//     switch (key) {
//         case 'w':
//             keys.w.pressed = false
//             player.velocity.y = 0 // reset the y-velocity to 0
//             break
//         case 'a':
//             keys.a.pressed = false
//             player.velocity.x = 0 // reset the x-velocity to 0
//             break
//         case 's':
//             keys.s.pressed = false
//             player.velocity.y = 0 // reset the y-velocity to 0
//             break
//         case 'd':
//             keys.d.pressed = false
//             player.velocity.x = 0 // reset the x-velocity to 0
//             break
//         }
//         // console.log(keys.d.pressed)
//         // console.log(keys.s.pressed)
// })

// console.log(Board.mapWidth)
// console.log(Board.mapHeight)
// console.log(Board.playFieldWidth)
// console.log(Board.playFieldHeight)

// board.draw();


function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    board.draw();
    if (player.alive) {
        player.draw();
    } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange"
        c.fillText("Blue Wins!", canvas.width/4, canvas.height/2);
    }
    if (player2.alive) {
      player2.draw();
    } else {
      c.font = "200px Georgia";
      c.fillStyle = "Orange";
      c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
    }
    // player.isDead();
    console.log(player.alive)
    // console.log(player.lastKey)
 
    // player.currentTile();
    // console.log('row ' + player.row)
    // console.log('col ' + player.col)
}

player.currentTile();
player.getPlayerTile();
animate();
// player.getTile();
// if (!player.alive) {
//     animate();
// }

// calculate x and y of tile