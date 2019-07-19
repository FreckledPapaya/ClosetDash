const rock ='../images/rock1.png';

class Canvas {
    constructor($el, dim) {
        this.canvas = $el;
        this.ctx = this.canvas.getContext("2d");
        this.height = 400;
        this.width = 800;
        this.hUnit = this.height/dim;
        this.wUnit = this.hUnit*2;
        // console.log(dim);
        
    } 
// multiples of 40




    drawPlayer () {
        
    }

    drawPlatform () {

    }

    drawPit () {
        
    }

    drawClosetItem () {

    }
}

export default Canvas;