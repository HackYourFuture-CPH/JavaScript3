var Game = require('./../src/Game.js');

describe("A Game can be created", function() {
  it("aspect Game to be a function", function() {
    expect(typeof Game).toBe('function');
  });
});
