import Board from './board.js'
import Player from './player.js'
import Playertwo from './playertwo.js'
import Tile from './tile.js'
import AI from './ai.js'

const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

const board = new Board;
Board.map.forEach(ele => console.log(ele))
// const player = new Player(375, 175)
console.log(Board.canvasStartX)
console.log(Board.canvasStartY)
const player = new Player(Board.canvasStartX + (Tile.size * 1.5), Board.canvasStartY + (Tile.size * 1.5))
const player2 = new Playertwo(Board.mapWidth + (Tile.size * 1.5), Board.mapHeight + (Tile.size /2 ))
const rambo = new AI(Board.playFieldWidth/2, Board.playFieldHeight/2)
player.currentPlace.occupied = true
player2.currentPlace.occupied = true
if (rambo) {
  rambo.currentPlace.occupied = true
}





function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    board.draw();
    if (rambo) {
      if (rambo.alive && (!player2.victory || !player.victory)) {
        rambo.draw();
      } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange";
        c.fillText("Players Win!", canvas.width / 4, canvas.height / 2);
      }
      rambo.makeMove();
      rambo.makeMove();
      rambo.break();
    }
    if (player.alive && !player2.victory) {
        player.draw();
    } else {
        c.font = "200px Georgia";
        c.fillStyle = "Orange"
        c.fillText("Blue Wins!", canvas.width/4, canvas.height/2);
    }
    if (player2.alive && !player.victory) {
      player2.draw();
    } else {
      c.font = "200px Georgia";
      c.fillStyle = "Orange";
      c.fillText("Red Wins!", canvas.width / 4, canvas.height / 2);
    }
}


// player.currentTile();
// player.getPlayerTile();
// player2.getPlayerTile();
console.log(player.currentPlace)
animate();
setInterval(Board.shrink(), 1000);
// player.getTile();
// if (!player.alive) {
//     animate();
// }

// calculate x and y of tile