var verses = require('./Verses');

FoodChain = function(){}

FoodChain.prototype.verse = function (n) {
    return verses[n];
}

FoodChain.prototype.verses = function(a, b){
    
}

module.exports = FoodChain;