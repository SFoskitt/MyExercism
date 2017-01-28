Gigasecond = function(input){
    Gigasecond.input = input;
};

Gigasecond.prototype.date = function () {

    var inputCopy = Gigasecond.input;
    var inputMilliSeconds = Date.parse(inputCopy);
    var inputCopyPlus = inputMilliSeconds + 1e+12;
    return new Date(inputCopyPlus);   
}

module.exports = Gigasecond;