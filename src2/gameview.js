class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.player = this.game.addPlayer();
  }
  // event listeners?

  bindKeyHandlers() {
    const player = this.player;

    Object.keys(GameView.MOVES).forEach((k) => {
      const move = GameView.MOVES[k];
      key(k, () => { player.power(move); });
    });

    key("space", () => { ship.jump(); });
  }

  start () {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate (time) {
    const timeDelta = time - this.lastTime;

    // move objs
    this.game.step(timeDelta); 
    // render view
    this.game.draw(this.ctx);
    // creates continuous animation loop
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  l: [-1,0],
  r: [1,0]
};

module.exports = GameView;