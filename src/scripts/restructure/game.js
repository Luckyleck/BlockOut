import Board from "./board.js";
import Player from "./player.js";
import Playertwo from "./playertwo.js";
import Tile from "./tile.js";
import AI from "./ai.js";


const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//Spawn Board

const board = new Board();

const playerOne = new Player(
  Board.gameFieldX + Tile.size * 1.5,
  Board.gameFieldY + Tile.size * 1.5
  )
const playerTwo = new Playertwo(Board.mapWidth, Board.mapHeight)