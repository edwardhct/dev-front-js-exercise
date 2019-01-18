
var repeatString = function(string, times) {
    if (times < 0) return 'Error';
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string
      }
    return result
  }

module.exports = repeatString
