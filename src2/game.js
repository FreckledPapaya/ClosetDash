const Player = require('./player');
const Pit = require('./pit');
const ClosetItem = require('./closetitem');
const Wall = require('./wall');
const Util = require('./util');


class Game {
  constructor () {
    this.players = [];
    this.pits = [];
    this.closetItems = [];
    this.walls = [];
  }

  add(object) {
    if (object instanceof Player) {
      this.players.push(object);
    } else if (object instanceof Pit) {
      this.pits.push(object);
    } else if (object instanceof Wall) {
      this.walls.push(object);
    } else if (object instanceof ClosetItem) {
      this.closetItems.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  allObjects () {
    return [].concat(this.players, this.pits, this.closetItems, this.walls);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for(let i=0; i< allObjects.length; i++) {
      for (let j=0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        // if (obj1.isCollidedWith(obj2)) {
        //   const collision = obj1.collideWith(obj2);
        //   if (collision) return;
      }
    }
    // j=i? offset objects?
  }
  
  draw (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    // Boolean(this.board.validPosition(pos));
    // use game dimentions to check
  }

  moveObjects(delta) {
    this.allObjects().forEach(object => {
      object.move(delta);
    });
  }

  remove(object) {
    if (object instanceof Player) {
      this.players.splice(this.players.indexOf(object, 1));
    } else if (object instanceof Pit) {
      this.pits.splice(this.pits.indexOf(object, 1));
    } else if (object instanceof Wall) {
      this.walls.splice(this.walls.indexOf(object, 1));
    } else if (object instanceof ClosetItem) {
      this.closetItems.splice(this.closetItems.indexOf(object, 1));
    } else {
      throw new Error("unknown type of object");
    }
  }

  step (timeDelta) {
    // moves all obj
    this.moveObjects(timeDelta);
    // this.checkCollisions();
  }

}

Game.BG_COLOR = "black";
Game.DIM_X = 400;
Game.DIM_Y = 800;

module.exports = Game;