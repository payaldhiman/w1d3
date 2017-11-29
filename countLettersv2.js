function countLetters(str){
  var obj = {};
  for(var i = 0; i < str.length; i++){
    var letter = str[i];
    if(letter == " "){
      continue;
    }
    if (obj[letter] === undefined) {
      obj[letter] = [];

    }

    obj[letter].push(i) ;

  }
  return obj;
}
console.log(countLetters("lighthouse in the house"));