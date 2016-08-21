var Game = require('./../src/Game.js');

describe("A Game can be created", function() {
  it("Game to be a callable function", function() {
    expect(typeof Game).toBe('function');
  });
});
