const { Game } = require('./src/Game')
const { GUI } = require('./src/GUI')
const game = new Game(new GUI())

game.start()
