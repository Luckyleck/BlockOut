class Tile {

    static size = 50;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Tile.size;
        this.health = 3;
        this.visible = true;
        this.row;
        this.col;
    }


}

export default Tile;