Pangram = function (input){
    Pangram.input = input;
};

Pangram.prototype.isPangram = function (){
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    var parsed = Pangram.input.split('');
    parsed.forEach(function(char){
        var idx = alpha.indexOf(char.toLowerCase());
        if(idx > -1){
            alpha.splice(idx, 1);
        }
    })
    return alpha.length === 0;
}

module.exports = Pangram;