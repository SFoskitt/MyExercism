Anagram = function(arg){
    this.arg = arg.toLowerCase();
    this.word = arg.toLowerCase().split('').sort().join('');
}

Anagram.prototype.matches = function(thing){
    let arr = Array.isArray(thing) ? thing : [thing];
    return arr.filter((ele) => {
        let toTest = ele.toLowerCase();
        if(toTest !== this.arg){
            return this.word === toTest.split('').sort().join('');        
        }
    });
}

module.exports = Anagram;