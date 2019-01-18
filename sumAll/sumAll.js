const sumAll = function(firstnumb, firstnumb) {

    if (firstnumb < 0 || secondnumb < 0) return "Error";

    if (typeof firstnumb !== "number" || typeof firstnumb !== "number") return "Error";

    var sum = 0;
    for (var i = firstnumb; i < secondnumb + 1; i++) {
      sum += i;
    }
    return sum;
}

module.exports = sumAll
