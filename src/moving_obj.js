

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.imgSrc = options.imgSrc;
    this.game = options.game;
  }

  collideWith (otherObj) {

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

export default MovingObject;