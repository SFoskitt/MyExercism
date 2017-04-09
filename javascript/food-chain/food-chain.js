var verses = require('./Verses');

FoodChain = function(){}

FoodChain.prototype.verse = function (n) {
    return verses[n];
}

FoodChain.prototype.verses = function(a, b){
    var ans = '';
    for (var i = a; i <= b; i++){
        ans += verses[i] + '\n';
    }
    return ans;
}

module.exports = FoodChain;