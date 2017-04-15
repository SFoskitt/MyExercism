class School {
    constructor(){
        this.db = {};
    }

    add (name, grade){
        this.db[grade] ? this.db[grade].push(name) : this.db[grade] = [name];
    }

    roster(){
        if(this.getKeys().length){
            for(var key in this.db){
                this.db[key] = this.db[key].sort();
            }
        } else {
            return this.db;
        }
      return this.db;
    };

    grade(num){
        if(this.getKeys().length){
            let tmp = this.db[num];
            return tmp.sort();
        }
        return [];
    }

    getKeys(){
        return Object.keys(this.db);
    }
}

module.exports = School;