const MovingObj = require('./movingobj');
const Block = require('./block');


document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // const display = new Display(canvas, 20);
  // const game = new ClosetDash(display);
  // game.run();

  window.ctx = ctx;
  window.MovingObj = MovingObj;

  let options = {
    pos: [0,0],
    vel: null,
    game: null
  };
  let block  = new Block(options);

  block.draw(ctx);
  // canvas.addEventListener("mouseover", game.displayPlay);
  // canvas.addEventListener("click", game.handleClick);

});
