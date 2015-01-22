

var filterNumbers = function (string) {
  var isNotADigit = function(x) {
    return "1234567890".indexOf(x) == -1;
  };

  return string.split("").filter(isNotADigit).join("");
};

var removeSquareBracketedBits = function (str) {

}