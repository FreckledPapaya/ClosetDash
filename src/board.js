// require here
 

class Board {

    constructor (dim) {  
        this.dim = dim; 
        this.numRows = dim;
        this.numCols = 2*dim;

        this.EMPTY = ".";
        this.WALL = "w";
        this.BOOSTER = "o";
        this.PIT = "p";
        this.PLAYER = "*";
    } 

// returns empty grid 
    emptyGrid() {
        let height = this.dim;
        let width = 2 * this.dim;  

        let row = [];
        for (let i=0; i<width; i++) {
            row.push(".") ; 
        }   

        let grid = []; 
        for (let i=0; i<height; i++) {
            grid.push(Object.assign([], row));
        }
        
        this.grid = grid;
    } 

    wallGrid () {  

        this.grid.forEach((row, i) => {
            if (i === 0 || i === 1 || i === 18 || i === 19) {
                this.grid[i] = row.map(ele => (this.WALL));
            } else { 
                row[0] = this.WALL; 
            }
        }); 
        return this.grid;
    } 

    validPosition (coord) {
        return (coord[0] >= 0) && (coord[0] < this.dim) &&
            (coord[1] >= 0) && (coord[1] < 2*this.dim);
    } 

    render ()  {
        // later populate with player, walls, pits
        return this.emptyGrid;
    } 
}

export default Board;