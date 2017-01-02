// Why this part???
var Hamming = function() {};

Hamming.prototype.compute = function (stringOne, stringTwo) {
  // Check if string lengths are equal
  if (stringOne.length == stringTwo.length) {

    // Initiate a counter
    var hammingDistance = 0;
    // Iterate through all the chars
    for (var i = 0; i < stringTwo.length; i++) {
      // If char same, counter stays uncahnged
      if (stringOne[i]===stringTwo[i]) {
        // Do nothing
      } else {
        // else counter++
        hammingDistance++;
      }
    }
    // return counter
    return hammingDistance;
  }
  else {
    throw 'DNA strands must be of equal length.';
  }
};

module.exports = Hamming;
