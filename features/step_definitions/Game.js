module.exports = function(){
  this.Given(/^"([^"]*)" with score (\d+)$/, function (Player, Score, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^"([^"]*)" play "([^"]*)"$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^"([^"]*)" should have score (\d+)$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
};
