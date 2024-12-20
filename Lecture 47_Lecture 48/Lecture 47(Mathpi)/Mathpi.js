// USE OF THIS PROPRTY: Object.getOwnPropertyDescriptor(Math)

// 01---Sbsy pehly tu meny ye below wala kam kea Math.PI ki value ko change krny klye
// lkin ye na hoska..

// console.log(Math.PI);
// I changed it and overwrite this but it should not be changed why?
// Math.PI = 5
// console.log(Math.PI);

// 02--And then meny ye property ko use krk dekha..then iski output sy pta laga k writeable tu false hai islye m khudsy create krk osk true krk krwa skti o...
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// 03-- And yahan meny try krlea...(k kesa m khudsy object create kek pie ki value ko change krskti o...)

const chai = {
    name: "Chaid",
    price: 10,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");    
    }
}

console.log(chai);
// ab kea is object ki descriptor property hai? aghr h tu kesy dekh skty:
// Ab chai k andr mjhy kiski descriptor property chye wo btana hoga ku k descriptor property ki hoti hai object ki nahi..or chai tu object hai...
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// ab m iski define krk change b krskti o

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Ab mai loop laga k dekho bala?
// for loop b laga skti thie lkin object klye for-of loop easy rehta hai ku k osmai direct key: value pair ajti like this:

for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key}: ${value} `); 
    }
}

// ab yehi kam m 3 dfa krti islye m oper loop laga lea ta k ye kam 3 dfa na krna pry...
console.log(`name: ${chai.name}`);
    
