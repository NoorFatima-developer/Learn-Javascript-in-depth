// how can data store in memory and how can we access it..On its basis data categorized in two ways:
// Data Types can be categorize in two ways:
// 1. Primitive datatypes
// 2. Non-primitive datatypes (reference types)

// 1. Primitive datatypes
// call by value (means when we copy data then gives copied data not original data)
// 7--Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Non-primitive datatypes (reference types)
// Arrays, Objects, Functions

////==========Is Javscript statically typed or dynamically types language========

// JavaScript is a dynamically typed language. 
// Because data type will automatically assigned at the time of compilation or code execution.
// Example let num = 12, const score true (I don't need to tell js that 12 is a num and true is a boolean)

//Example of all Integer data-types...(Primitive datatypes)

const score = 100
console.log(score);

const scoreValue = 100.3
console.log(scoreValue);
console.log(typeof scoreValue);     //output = number



const isLoggedIn = false
console.log(isLoggedIn);

const outsideTemp = null    //bilkul khali
console.log(outsideTemp);   //output = null
console.log(typeof outsideTemp);   //output = object


let userEmail;              //by-default undefined
console.log(userEmail);

// Not True.............
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof id);     //output = symbol
console.log(typeof anotherId);     //output = symbol


//Both results are same:::

const bigNumber = BigInt(12345678901234567890)
console.log(bigNumber);

const bigNumber1 =12345678901234567890n
console.log(bigNumber);

// Example of Non-Primitive data-types:

// Array, Objects, Functions:
//NOTE:  Arrays and Objects datatypes are functions and functions act as objects so its object.. and Function return type is object function...

//Array:
const heros = ["noor", "hira", "ali"]
console.log(heros);
console.log(typeof heros);          //object


//Object:
let myObj = {
    name: "noor",
    age: 25,
}
console.log(myObj);
console.log(typeof myObj);          //object


//Function:(In javascript we treat functions as variables)

const myFunction = function() {
    console.log("Hello world");
}
console.log(myFunction);        

console.log(typeof myFunction);     //output = function


//Example

console.log(typeof BigInteger);     //undefined because I did't defined it...


//============NOTES=================

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//===================================================================//
//Lecture 10:

//Stack(Primitive datatypes==> jo b memory m change kraingy copy milygi), Heap(Non-Primitive datatypes==>jo b memory m change kraingy oska origin milyga)

//Stack:

let myname = "Noor"
let myanothername = myname
myanothername = "myrollno"

console.log(myname);            //output = Noor
console.log(myanothername);     //output =myrollno

//Heap:

let userOne = {
    name: "Noor",
    age: 25
}

let userTwo = userOne

userTwo.name = "myrollno"

console.log(userOne.name);      //output: myrollno
console.log(userTwo.name);      //output: myrollno
