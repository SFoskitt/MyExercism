class Isogram {
    constructor(word){
        this.word = word.toLowerCase().split('');
    }

    isIsogram(){
        let dict = {};
        let count = 0;
        this.word.forEach((ele) => {
            if(ele.match(/[A-Z|a-z|ü|é]/i)){
                dict[ele] = ele;
                count++;
            }
        }, this);
        return count === Object.keys(dict).length;
    }
}
module.exports = Isogram;