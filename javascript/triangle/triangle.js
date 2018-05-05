class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kind () {
        if (this.a <= 0 
            || this.b <= 0
            || this.c <= 0)
            { throw new Error('something is zero but shouldnt be'); }

console.log('weirdness', (this.a + this.b < this.c && this.b + this.c < this.a && this.c + this.a < this.b));

        if (this.a + this.b < this.c 
            && this.b + this.c < this.a
            && this.c + this.a < this.b)
            { throw new Error('inequality thing'); }

        if (this.a === this.b 
            && this.b === this.c 
            && this.c === this.a)
            { return 'equilateral'; }

        if (this.a !== this.b
            && this.b !== this.c
            && this.c !== this.a)
            { return 'scalene'; }

        // return 'isosceles';        
    }
}

// var Triangle = function (a, b, c) {
//     this.kind = kind;
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// function kind () {
//     let a2 = Math.pow(this.a,2);

//     if (this.a <= 0 
//         || this.b <= 0
//         || this.c <= 0)
//         { throw new Error('something is zero but shouldnt be'); }

//     if (this.a + this.b < this.c 
//         && this.b + this.c < this.a
//         && this.c + this.a < this.b)
//         { throw new Error('inequality thing'); }

//     if (this.a === this.b 
//         && this.b === this.c 
//         && this.c === this.b)
//         { return 'equilateral'; }

//     if (this.a !== this.b
//         && this.b !== this.c
//         && this.c !== this.a)
//         { return 'scalene'; }

//     // return 'isosceles';
// };

module.exports = Triangle;