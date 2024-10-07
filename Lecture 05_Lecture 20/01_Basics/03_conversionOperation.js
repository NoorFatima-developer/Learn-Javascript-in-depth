//Continue Lecture 05 in Lecture 06......

//--------------------------CONVERT STRING INTO NUMBER--------------------------------------

//Use Number to convert in----

//1-----Check type of this string:

let score = "33"
console.log(typeof score);      //output = string
console.log(typeof (score));    //output = string

let valueInNumber = Number(score)
console.log(valueInNumber);         //output = 33
console.log(typeof valueInNumber);  //output = number



//2------Check type of this string after convert it into number...
let score1 = "33abc"    
console.log(typeof score1); //output = string


// Create a new variable and pass score1 in Number as an argument...
let valueInNumber1 = Number(score1)
console.log(valueInNumber1)              //output = NAN
console.log(typeof valueInNumber1)       //output = number
    
//3------Check type of null:
let score2 = null


console.log(typeof score2);      //output = object
console.log(typeof (score2));    //output = object



let valueInNumber2 = Number(score)
console.log(valueInNumber2)              //output = 0
console.log(typeof valueInNumber2)       //output = number

//4------Check typeof undefined:
let score3 = undefined


console.log(typeof score3);      //output = undefined
console.log(typeof (score3));    //output = undefined



let valueInNumber3 = Number(score3)
console.log(valueInNumber3)              //output = NAN
console.log(typeof valueInNumber3)       //output = number

//5------Check typeof boolean:

let score4 = true


console.log(typeof score4);      //output = boolean
console.log(typeof (score4));    //output = boolean



let valueInNumber4 = Number(score)
console.log(valueInNumber4)              //output = 1
console.log(typeof valueInNumber4)       //output = number



///----------SUMAAARY OF THESE String into Number CONVERSIONOPERATIONS --------------------------------///

// "33" (this string easily convert into number) => output = 33;
// "33abc"(this string is not convert into number) => output = NAN;
// undefined => output = NAN;
// null => output = 0
// true => 1, false => 0

// -------------------------------------------------------------------------------------------------------------//

//--------------------------CONVERT NUMBER INTO BOOLEAN--------------------------------------
//Use Boolean... 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)       //output = true

//NOTES:::::


//1 => true; 0 => false
//"hitesh" => true
//"" => false

//----------------------------CONVERT NUMBER INTO STRING-------------------------------------

let number = 123

let stringNumber = String(number)

console.log(stringNumber)        //output = "123"
console.log(typeof stringNumber);      //output = string


//--------------------Lecture 05 is still continue in Lecture 07---------------------------------



// ==============================Operations in js===================================

let value = 3
let negValue = - value
console.log(negValue)           //output = -3;

//COMMON OPERATIONS ARE:

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);  //asteric basically power when increased then power is increased...
// console.log(2/2);
// console.log(2%2);


///----Add string + string-----///
let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3) //output = "hello world;

//---Add string + number and number + string-----
//Let say:

console.log("1" + 2);       //output = 12
console.log(1 + "2");       //output = 12
console.log("1" + 2 + 2);   //output = 122
console.log(1 + 2 + "2");   //output = 32

console.log(true);          //output = true
console.log(false);         //output = false
// console.log(+true);         //output = 1 (don't use this as well.. make code readable!)
// console.log(true+);         //gives error (don't use this as well.. make code readable!)
// console.log(+"");               //output = 0 (don't use this as well.. make code readable!)

// Don't do this as well:

let num1, num2, num3
 num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
//Homework:
////---------STUDY PREFIX AND POST PREFIX----------------
// prefix postfix js mdn