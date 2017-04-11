Anagram = function(arg){
    this.word = arg.toLowerCase().split('').sort();
}

Anagram.prototype.matches = function (arr) {
    // console.log('this.word in matches', this.word);
    var process = this.process;
    var base = this.word;
    var ans = arr.filter(function(ele){
        console.log('ele', ele);
        return process(ele.toLowerCase().split('').sort(), base);
    });
    console.log('ans', ans);
    return ans;
}

Anagram.prototype.process = function (test, base) {
    console.log('JSON.stringify(test) === JSON.stringify(base)', JSON.stringify(test) === JSON.stringify(base));
    return JSON.stringify(test) === JSON.stringify(base);
}

Anagram.prototype.sortA = function(a,b){
    return a - b;
}

module.exports = Anagram;