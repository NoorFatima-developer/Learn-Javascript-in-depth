//====Reduce Method in javascript=====

//accumulator k andr initial value ati hai, and initial value zror deni hoti hai essy osy pta kesy chlyga k start kaha sy krna hai,,,
//and cuurval mai current value jygi
//mtlb pehly variable k andr initial value ayegi and other variable k andr current value aygi...
const myNumbers = [1, 2, 3]

const myTotal = myNumbers.reduce( function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)

console.log(myTotal);


//Usage:
//Shopping cart m ye bht sary bills hain or in sbki price ko add krdo tb hum reduce ko use krygy...
//ab hum first value ko hata k tu ni krskty na add essy first wala add kaha jyga islye hum log reduce ko wahan use krty hain or krygy b...


//Use reduce function in arrow function instead of simple functon...

const Total = myNumbers.reduce( (acc, currval) => (acc + currval), 0)
console.log(Total);


//Ab ye sara kam hum for of loop, for while loop, do-while loop sbmai krskty thy
//lkin whi bt code zda short more readble ismai lgta islye hmny ye reduce use kea...

//Example 02:
