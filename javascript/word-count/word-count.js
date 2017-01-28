Words = function (){}

Words.prototype.count = function(input){
    
    var parsed = input.replace(/[ \n\t\r]+/g, " " ).split(' ');
    var ret = {};
    
    parsed.forEach(function(word){
        if(word === ''){
            parsed.splice(parsed.indexOf(word),1);
        }
    })

    parsed.forEach(function(word){
        if(ret.hasOwnProperty(word)){
            ret[word] = ret[word] + 1;
        } else {
            ret[word] = 1;
        }
    })

    return ret;
}

module.exports = Words;