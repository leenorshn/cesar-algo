function cesar(str, amount) {
  if (amount < 0) {
    return cesar(str, amount + 26);
  }
  // var for storing result
  var res = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }

      res = res + c;
    }
  }
  return res;
}

console.log(cesar("Victor", 20));
