class Tile {

    static size = 50;

    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.size = Tile.size;
        this.health = 3;
        this.visible = true;
        this.row;
        this.col;
    }


}

export default Tile;