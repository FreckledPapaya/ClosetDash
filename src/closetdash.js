class ClosetDash {
    constructor(display) {
        this.display = display;
        this.board = this.display.board;
    }

    run() {
        this.setupBoard();
    }

    setupBoard() {
        this.display.populateBoard();
    }

    outOfBounds (pos) {
        Boolean(this.board.validPosition(pos));
    }

    displayPlay () {
        // response for mouseover when game begins
        // conditional to check whether game is running
        // display "play" or "pause"
        // tint screen?
        console.log("display play");
    }
    
    handleClick () {
        // alter paused/play to opposite
        console.log("pause/start");
    }
}


module.exports = ClosetDash;