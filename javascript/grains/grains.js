'use strict';

var BigInt = require('./big-integer');

var Grains = function() {
  this.square = square;
  this.total  = total;
};

function square(x) {
  return BigInt(2).pow(x-1).toString();
}

function total() {
  var sum = BigInt(0);
  for(var i = 0; i < 64; i++) {
    sum = sum.add(BigInt(2).pow(i));
  }
  return sum.toString();
}

// var BigInt = require('./big-integer');
// class Grains {

// 	total(){
//         var total = new BigInt;
//         for (var x = 1; x < 65; x++){
//             total = total.plus(parseInt(this.square(x)));
//             console.log('total after add', total);
//         }
//         return total.toString();
//     }
//     square(num){ // the number of the square on the board
//         if (num === 1) {
//             return '1';
//         } else {
//             var next = 1;
//             var cnt = 1;
//             while(cnt < num){
//                 console.log('next before arg', next);
//                 var bigI = BigInt(parseInt(next)).times(2);
//                 next = bigI.toString();
//                 cnt++
//             }            
//             return bigI.toString();
//         }
//     }    	
// }

 module.exports = Grains;