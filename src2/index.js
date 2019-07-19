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
  window.Block = Block;
  // canvas.addEventListener("mouseover", game.displayPlay);
  // canvas.addEventListener("click", game.handleClick);
  // canvas.addEventListener("onkkeydown", e => {
  //   console.log(e);
  // });
});
