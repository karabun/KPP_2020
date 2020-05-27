const DIRECTIONS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
};

const DIRECTION_UP = 'up';
const DIRECTION_RIGHT = 'right';
const DIRECTION_DOWN = 'down';
const DIRECTION_LEFT = 'left';

const SPEED = 100;

const SNAKE_SIZE = 2;
const SNAKE_COLOR = 'red';
const DOT_COLOR = 'yellow';

module.exports = {
  DIRECTIONS,
  DIRECTION_UP,
  DIRECTION_RIGHT,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  SPEED,
  SNAKE_SIZE,
  SNAKE_COLOR,
  DOT_COLOR,
};
