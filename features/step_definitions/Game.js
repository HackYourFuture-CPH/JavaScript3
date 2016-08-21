var Game = require('./../../src/Game');

module.exports = function(){

  var Match = new Game();

  this.Given(/^"([^"]*)" with score (\d+)$/, function (Player, Score, callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    Match.addPlayer(Player, Score);
    if(Match.getPlayer(Player) === undefined){
      throw new Error('Expected player declared');
    }
    callback();
  });

  this.When(/^"([^"]*)" play "([^"]*)"$/, function (Player, Symbol, callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    Match.getPlayer(Player).play(Symbol);
    callback();
  });

  this.Then(/^"([^"]*)" should have score (\d+)$/, function (PlayerName, Score, callback) {
    // Write code here that turns the phrase above into concrete actions
    if( !Match.ended ) Match.end();

    if( Match.getPlayer(PlayerName).score !== Score){
      throw new Error('Score isn\'t correct');
    }
    callback();
  });
};
