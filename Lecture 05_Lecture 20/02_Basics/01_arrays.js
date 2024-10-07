//===========Array================//

//There will be same elements in array as well as dofferent elements in array...

//Array is a single variable in which we can store multiple elements like this:
//Declaration of array by different methods:

//1---
let myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);
console.log(myArr[3]);
console.log(myArr.length);



//Javascript Arrays are resizeable it means we can change or add more elements

//Deep copy and shallow copy in js:
// shallow copy is -> share the same reference...(it means jo b change kraingy original array m change o ga)
//Deep copy -> do not share the same reference...(it means jo b change kraingy original array mai ni hoga blky oski copy bnygi)

//2---
let myHeros = ["noor", "hira", "fatima"]
console.log(myHeros[2]);


//3---
let myArr2 = new Array(1, 22, 3, 4)
console.log(myArr2[1]);

//========Array Methods:==============//

let myArr1 = [0, 1, 2, 3, 4, 5]

//1---Push Method:::(add value)
myArr.push(6)
myArr.push(7)
console.log(myArr);

//2---Pop Method:::(remove last value)

myArr.pop()
console.log(myArr);

//3---unshift Method:::(add value at the beginning)

myArr.unshift(8)
console.log(myArr);

//4---shift Method:::(remove first value)

myArr.shift()
console.log(myArr);

//5---include Method:::(give ans in true or false)

console.log(myArr.includes(2));         //output = true because 2 is present in array

//6---indexOf Method:::(give index of first occurrence)

console.log(myArr.indexOf(4));         //output = 4 because 4 is at index 4 in array
console.log(myArr.indexOf(9));         //output = -1 if value not found in array then it wil give ans -1

//7---Join Method:::(convert array into string)

const newar = myArr1.join()

console.log(newar);
console.log(myArr1);
console.log(typeof newar);

//8--- slice , splice


//original array:
console.log("A ", myArr1);

//slice method:(not include last elment)
const myn1 = myArr1.slice(1, 3)     //1, 2, ayega 3 nahi ayega picy tk krta h return
console.log(myn1);

//original array:
console.log("B", myArr1);

//splice method:(include last element but major difference in original array k jo elements splice horye hain onk elawa baki sary array m ajyega as an output)
const myn2 = myArr1.splice(1, 3)
console.log("C ", myArr1);      //baki bachi hoe array ayegi output mai 0, 4, 5

console.log(myn2);




