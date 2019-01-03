const reverseString = function(str) {
    var splitString = str.split(""); 
    var reverseStr = splitString.reverse(); 
    var joinStr = reverseStr.join("");
}
return joinStr; 

module.exports = reverseString
