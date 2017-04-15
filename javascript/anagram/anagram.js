class Anagram {
    constructor(arg){
        this.arg = arg.toLowerCase();
        this.word = arg.toLowerCase().split('').sort().join('');
    }

    matches(thing){
        let arr = (Array.isArray(thing) ? thing : Array.apply(null, arguments));
        return arr.filter((ele) => {
            let toTest = ele.toLowerCase();
            if(toTest !== this.arg){
                return this.word === toTest.split('').sort().join('');
            }
        }, this)
    }
}

module.exports = Anagram;