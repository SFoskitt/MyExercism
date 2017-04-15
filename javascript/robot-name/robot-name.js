class Robot {
    constructor(){
        this.usedNames = {};
        this.setName();
    }

    reset(){
        this.setName();
    }

    setName(){
        this.name = '';
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let nums = '0123456789';
        for (var i = 0; i < 2; i++){
            this.name += letters[Math.round(Math.random() * (letters.length -1))];
        }
        for (var i = 0; i < 3; i++){
            this.name += nums[Math.round(Math.random() * (nums.length -1) )];
        }
        
        if(this.usedNames.hasOwnProperty(this.name)){
            this.name = '';
            this.setName();
        } else {
            this.usedNames[this.name] = true;
        }
    }
}

module.exports = Robot;
