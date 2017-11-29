function countLetters(str){
  var obj = {};
  var str = str.split(" ").join("");
  str = str.split("");
  for(var i = 0; i < str.length; i++){
    var letter = str[i];
    if (obj[letter] === undefined) {
      obj[letter] = 0;
    }
    obj[letter] += 1;

  }
  return obj;
}
console.log(countLetters("lighthouse in the house"));