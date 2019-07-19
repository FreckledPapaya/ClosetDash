const MovingObj = require('./movingobj');
const rock = '/Users/appacademy/Desktop/Closet/dist/images/rock1.png';
// change pathname @ home

class Block extends MovingObj {
  constructor(options) {
    super(options, rock);
  }

  draw(ctx) {
    let x = this.pos[0] * this.scale;
    let y = this.pos[1] * this.scale;
    let img = new Image();
    img.src = rock;
    img.onload = () => {
      ctx.drawImage(img, x, y);
    };
  }
}

module.exports = Block;