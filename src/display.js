import Board from './board';
const rock = '../images/rock1.png';


class Display {
    constructor($el, dim) { 
    this.canvas = $el;
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 800;
    this.hUnit = this.height / dim;
    this.wUnit = this.hUnit * 2;

    this.board = new Board(dim);  
    this.grid = this.board.grid;
    } 

    populateBoard () {
        this.board.emptyGrid();
        this.board.wallGrid();
    }

    render () {
        const grid = this.grid;
        const canvas = this.canvas;
        let x=0;
        let y=0;
        grid.forEach((row, y) => {
            // if (x===1) { 
                row.forEach((col, x) => {  
                    switch (grid[y][x]) {
                        case "w":
                            canvas.drawWallBlock(x,y); 
                    }
                });
            // }
        });
        console.log(grid);
        // canvas.drawWallBlock(0,0);
    }

    initializeCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    renderWallBlock(x, y) {
        let ctx = this.ctx;
        let img = new Image();
        img.src = rock;
        x = x * this.wUnit;
        y = y * this.hUnit;
        img.onload = () => {
            ctx.drawImage(img, x, y);
        };
    }


    // puts given obj at given coordinates
    position(obj, coord) {
        let x = coord[0];
        let y = coord[1];
        this.grid[x][y] = obj;
    }

}

export default Display;