let count=0;

function spread(){
    console.log(count);
    count++;
    if(count===5){
        clearInterval(interv);
    }
}

let interv= setInterval(spread,1000);

let arrFunc= require('./export1');
let redFunc= require('./export2');

const arr=[3,4,55,2,0,22,1,];
const twoDArr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arrFunc.makeString(arr));
console.log(arrFunc.makeArray('HElloweiiiii'));
console.log(redFunc.oneDArray(twoDArr));
console.log(redFunc.formatTime(1000));