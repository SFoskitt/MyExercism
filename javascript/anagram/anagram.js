Anagram = function(arg){
  this.word = arg.toLowerCase().split('').sort().join('');
}

Anagram.prototype.matches = function(arr){
  if(Array.isArray(arr)){
    return arr.filter((elem) => {
        var test = elem.toLowerCase().split('').sort().join('');
        return this.word === test;
    });
  } else {
      var test = arr.toLowerCase().split('').sort().join('');
      if(this.word === test){
          return [arr];
      } else {
          return [];
      }
  }
}

module.exports = Anagram;