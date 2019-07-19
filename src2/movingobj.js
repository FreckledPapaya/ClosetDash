class MovingObj {
  constructor(options, imgSrc) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.imgSrc = imgSrc;
    this.game = options.game;
    this.scale = 20;
  }

  collideWith(otherObj) {

  }

  draw(ctx) {
    debugger
    let x = this.pos[0] * this.scale;
    let y = this.pos[1] * this.scale;
    let img = new Image();
    img.src = this.ImgSrc;
    img.onload = () => {
      ctx.drawImage(img, x, y);
    };
  }

  move(timeDelta) {
    // timeDelta is number of milliseconds since last move
    // if the computer is busy the time delta will be larger
    // in this case the MovingObject should move farther in this frame
    // velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    // out of bounds logic
    // if (this.game.outOfBounds(this.pos))
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

module.exports = MovingObj;