Bob = function () {}

Bob.prototype.hey = function(phrase){
    var ans = '';
    var spaces = 0;
    var caps = 0;
    var lastChar = phrase[phrase.length - 1];
    
    for(var i = 0; i < phrase.length; i++){
        var tmp = phrase.charCodeAt([i]);
        if(tmp >= 65 && tmp <= 90){
            caps++;
        }
        if(tmp === 32 || phrase[i] === ' '){
            spaces++;
        }
    }

    if(spaces === phrase.length || phrase.length === 0){
        return 'Fine. Be that way!';
    }
    
    if( (caps + spaces) >= phrase.length - 1 || lastChar === '!'){
        return 'Whoa, chill out!';    
    }

    if(lastChar === '?'){
        return 'Sure.';    
    }

    return 'Whatever.';
}

module.exports = Bob;