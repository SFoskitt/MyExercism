Isogram = function (word) {
    this.word = word;
}

Isogram.prototype.isIsogram = function(){
    var dict = {};
    var count = 0;

    for (var i = 0; i < this.word.length; i++){
        if(this.word[i].match(/[A-Z|a-z|ü|é]/i)){
            dict[this.word[i].toLowerCase()] = this.word[i].toLowerCase();
            count++;
        }
    }
    return count === Object.keys(dict).length;
}

module.exports = Isogram;