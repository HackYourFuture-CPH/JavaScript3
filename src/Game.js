// The game
var Player = function( Name, Score ){
  var self = this;

  this.score = Score;
  this.name = Name;
  this.lastPlay = null;
  this.play = function( Symbol ){
    self.lastPlay = Symbol;
  };
};

module.exports = function(){
  var players = {};
  var self = this;

  this.ended = false;

  this.end = function(){
    self.ended = true;
    self.assignScore();
  };

  this.assignScore = function(){
  };

  this.addPlayer = function(PlayerName, Score){
    players[PlayerName] = new Player( PlayerName, Score);
  };

  this.getPlayer = function(PlayerName){
    return players[PlayerName];
  };
};
