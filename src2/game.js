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

  step (timeDelta) {
    // moves all obj
  }

  draw (ctx) {
    // draws objs;
  }

  checkCollisions() {

  }
}

module.exports = Game;