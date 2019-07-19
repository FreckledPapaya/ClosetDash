import ClosetDash from './closetdash';
import Display from './display';
import Board from './board';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const display = new Display(canvas, 20);
    const game = new ClosetDash(display);
    game.run();

    canvas.addEventListener("mouseover", game.displayPlay);
    canvas.addEventListener("click", game.handleClick);
    canvas.addEventListener("onkkeydown", e => {
        console.log(e);
    });
});
