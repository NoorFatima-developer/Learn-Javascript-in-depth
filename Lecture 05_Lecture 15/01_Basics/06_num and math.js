const score = 400
console.log(score);


//Numbers:::::::

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(10));


//Precision:
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


//Make number more readable:
const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//MATHS:

console.log(Math);
console.log(Math.abs(-4));          //positive number becomes + and negative becomes positive...
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));       //floor basically round to the lowest value
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


//Math.random:

console.log(Math.random()); 
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);    //0 value na aye that's why used + 1 ku k *10 krny sy hmry ps . wala case tu khtm o jyega lkin aghr value 0.1 o tu wo 0 dega islye +1 kea taa k value 1 sy 9 k drmayan day

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +  min);
