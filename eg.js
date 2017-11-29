function stringLengths(strings) {
  // 1. Initialize a return value
  var lengths = {};
  // 2. Loop over the input
  for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    if (string === '') {
      // Don't worry about it
      continue;
    }
    var stringLength = string.length;
    if (lengths[stringLength] === undefined) {
      lengths[stringLength] = 0;
    }
    // 3. Inside the loop, modify the return value
    lengths[stringLength] += 1;
  }
  // 4. Return the return value
  return lengths;
}

console.log(stringLengths([]));
console.log(stringLengths(['a', 'aa', 'aaa', 'bb']));
console.log(stringLengths(['', 'aa', 'aaa', 'bb', 'aa', 'aaa', 'bb', 'aa', 'aaa', 'bb', 'aa', 'aaa', 'bb', 'asdfasdfasdf', 'asdfasdf', 'qewrihqgew', 'oauhfvioaushdvouyasgho8uasr', ' ', 'a0s97dfy809as8yuf98asduf90as8duf098asduf', 'as0d98fyu0as9d87f0as9uf98asuf']));
