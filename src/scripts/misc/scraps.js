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




window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      this.keys.w.pressed = true;
      lastKey = "w";

      if ()
      this.y -= 50; // set the y-velocity to move upward
      // this.dy = -5
      break;
    case "a":
      this.keys.a.pressed = true;
      lastKey = "a";
      this.x -= 50; // set the x-velocity to move left
      // this.dx = -5
      break;
    case "s":
      this.keys.s.pressed = true;
      lastKey = "s";
      this.y += 50; // set the y-velocity to move downward
      // this.dy = 5
      break;
    case "d":
      this.keys.d.pressed = true;
      lastKey = "d";
      this.x += 50; // set the x-velocity to move right
      // this.dx = 5
      break;
  }
  // console.log(keys.d.pressed)
  // console.log(keys.s.pressed)
});


draw() {

        const startX = canvas.width / 4
        const startY = canvas.height / 8

        Board.map.forEach((row) => {
            row.forEach((tile) => {
              if (tile instanceof Tile && tile.health === 3) {
                  // console.log(tile.row, tile.col)
                  c.fillStyle = 'green';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 2) {
                  c.fillStyle = '#80461B';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 1) {
                  c.fillStyle = '#352C29';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else if (tile instanceof Tile && tile.health === 0) {
                  c.fillStyle = '#ffebcd';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              } else {
                  c.fillStyle = 'blue';
                  c.fillRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
                  c.lineWidth = 2;
                  c.strokeStyle = 'black';
                  c.strokeRect(startX + (tile.col * tile.size), startY + (tile.row * tile.size), tile.size, tile.size);
              }
            })
        })
    }




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