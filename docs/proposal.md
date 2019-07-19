## Overview

ClosetDash is a simple platform game. The extent of the gameplay is pressing left, right, and space to navigate their player through the closet while avoiding pitfalls/obstacles.

The player will be able to collect clothes in the closet which boost their self esteem, meaning they can survive one obstacle collision.

The game difficulty will pick up as the player continues through the closet.

This game is inspired by classic platform games like super mario world. 

### Functionality

* Users can press left/right arrow keys to move left and right, and hit space to jump. 
* Pitfalls will appear at the bottom of the screen.
* Obstacles bounce between some of the pits and the cieling above them.
* The game ends if a player falls into a pit or gets hit by an obstacle.  

### Wireframes 

The app will consist of a single page with a play button and links to the Github repository.

Pressing play starts the game and text instructions will appear on the screen. Game play will being when the player hits enter or clicks "Continue".

Over time the obstacles will move faster and become harder to avoid.

Upon 'Game Over', the player will be prompted to restart the game.

##### Technologies employed

* Vanilla JavaScript for game logic.
* HTML5 Canvas for rendering.
* howler.js for game background music.
* Webpack to bundle various scripts into a single source. 

##### Main files
* `closetdash.js` main structure of the canvas and center of game logic.
* `grid.js` is responsible for tracking the position of objects on the grid.
* `display.js` responsible for rendering the grid.
* `player.js` receives input and outputs reaction and position.
* `pit.js` handles pits throughout their life span.
* `obstacle.js` handles individual obstacles throughout their life-span. 

### MVPs
- [ ] Basic visuals and an interactive interface.
- [ ] Player can move avatar through the game and jump onto surfaces.
- [ ] Obstacles generate and move between pitfalls and cieling above.
- [ ] Obstacles/Pitfalls cause 'Game Over' upon collision. 

### Development timeline

##### Day 1:
- [ ] Finish brainstorming, concept, and proposal.
- [ ] Finish js and canvas overview, choose support tech. 

##### Day 2:
- [ ] Finish basic project skeleton and essentials. 
- [ ] Begin basic page skeleton and functionality.


##### Day 3:
- [ ] Complete basic page skeleton and functionality.
- [ ] Complete board design and rendering.
- [ ] Start player avatar rendering and functionality.
- [ ] Start obstacle rendering and functionality.

##### Day 3: 
- [ ] Finish player avatar rendering and functionality. 
- [ ] Ideally complete obstacle rendering and functionality.
- [ ] Begin closet item rendering and functionality.


##### Day 4: 
- [ ] Implement obstacle/player collision.
- [ ] Complete closet items functionality.
- [ ] Finish game over condition. 

##### Day 5:
- [ ] Add flair and flashy visuals.
- [ ] Finish styling page.
- [ ] Complete MVPs and iron out project.
 

### Bonus features
* Items that may help or hinder the player: 
  * Temporary x2 speed for player avatar.
  * Temporary x2 height on jumps. 
* Hostile entity. Moves toward player and causes game over upon collision.
