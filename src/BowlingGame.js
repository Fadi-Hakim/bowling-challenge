var BowlingGame = function() {
  this.rolls =[];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 20; frameIndex++) {
    result += this.roll[rollIndex] + this.roll[rollIndex + 1];
    rollIndex += 2;
  }
  return result;
};
