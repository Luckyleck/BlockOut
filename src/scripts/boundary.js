class Boundary {
    static size = 50;

    constructor(row,col) {
        this.row = row; 
        this.col = col
        this.size = Boundary.size;
        this.occupied = false;
    }
}

export default Boundary