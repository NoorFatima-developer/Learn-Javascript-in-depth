//Challenge 01 
//Purpose to learn: Variables(var, let, const)

            // let name= "fahad"
            // let whatdoyouwannabecome = "Programmer" 
            // let gender = "Female"
            // let twitterhandle = "@fahadfatima"

            // console.log(name);
            // console.log(whatdoyouwannabecome);
            // console.log(gender);
            // console.log(twitterhandle);

//Challenge 02
//Purpose to learn: Simple Mathematic Operations in Javascript(i.e; +, -, *, /, %(modulus operation give remainder), **(power), ++(increment), --(decrement))

//FROM TWO WAYS I CAN SOLVE IT:

//ONE WAY.....(by making a new variable and store the two nums in new variable and console it)
            // let firstfavNum = 18;
            // let secondfavNum = 10;

            // let add = firstfavNum + secondfavNum
            // subtract = firstfavNum - secondfavNum
            // multiply = firstfavNum * secondfavNum
            // divide = firstfavNum / secondfavNum
            // modulus = firstfavNum % secondfavNum
            // power = firstfavNum ** secondfavNum

            // console.log(add)
            // console.log(subtract)
            // console.log(multiply)
            // console.log(divide)
            // console.log(modulus)
            // console.log(power)

//TWO WAY.....(simply add, subtract etc in console without making a new variable)

            // let firstfavNum = 18;
            // let secondfavNum = 15;


            // console.log(firstfavNum + secondfavNum)
            // console.log(firstfavNum - secondfavNum)
            // console.log(firstfavNum * secondfavNum)
            // console.log(firstfavNum / secondfavNum)
            // console.log(firstfavNum % secondfavNum)
            // console.log(firstfavNum ** secondfavNum)


//Challenge 03
//Purpose to learn: Booleans in JS

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 5;

// console.log(isJsProgrammingLanguage)
// console.log(isJsHard);
// console.log(favNumb + undefined)    //output: NAN(Not a Number)

//Challenge 04 
//Purpose to learn: Comparison Operators in JS

// let firstfavnum  = 20
// let secondfavNum = "20"

// console.log(firstfavnum > secondfavNum)
// console.log(firstfavnum < secondfavNum);
// console.log(firstfavnum >= secondfavNum)
// console.log(firstfavnum <= secondfavNum);
// console.log(firstfavnum === secondfavNum);
// console.log(firstfavnum == secondfavNum);
// console.log(firstfavnum != secondfavNum);
// console.log(firstfavnum !== secondfavNum);


//Challenge 05

// let favActorFirstName = "Mawra ";
// let favActorSecondName = "Hussain";

// both statments will do same work:
// let fullname = favActorFirstName.concat(favActorSecondName);
// let fullname = favActorFirstName + "" + favActorSecondName;
// console.log(fullname);

// let uppercase = fullname.toUpperCase();
// console.log(uppercase);

// let message = `My favorite Actor is ${uppercase},`;
// console.log(message);

// message += ` her best show is silicon valley.`;
// console.log(message);


// Challenge 06

// let password;


// if (password === 8){
//     console.log("Welcome");
// }

// else if(password <= 8){
//     console.log("Password is too short");
// }

// else if(password >= 8){
//     console.log("Too long password");
//     console.log("Password should be 8 characters");
// }

// else {
//     console.log("Please provide a password");
// }


// Challenge 07

// let fruit = "banana";
// let x;

// switch (fruit) {

//     case "banana":
        
//         x = "Banana is good!"
//         console.log(x);
//         break;

//     case "orange":

//         console.log("I am not a fan of orange.");
//         break;

//     case "apple":

//     console.log("How you like them apples?");
//     break;

//     default:
//         console.log("I have never heard of that fruit.");

// }



// Challenge 08:(for loop)

// for(let i = 0; i< 1000; i++){

//     console.log("fahad Fatima", i);
// }


// Challenge 09:(while loop)


// let i = 10;

// while (i <= 100) {
//     console.log("fahad Fatima", i);
//     i++;
// }

// Challenge 09:(do-while loop)

// let i = 20;

// do {
//     console.log("fahad Fatima", i);
//     i++;
// } while(i <=400);

// Challenge 10: (Array)

// let favsingers = ["atif", "hira", "qubra"];
// console.log(favsingers);
// console.log(favsingers[0]);

// let favnumbers = [123,243,33,47];
// console.log(favnumbers);

// let mixedarr = ["string", ["otherarray"], 123, true];
// console.log(mixedarr);
// console.log(mixedarr[0]);
// console.log(mixedarr[1]);
// console.log(mixedarr[2]);
// console.log(mixedarr[3]);

// Challenge 11

// const car = {type : "Honda", model : "old", color: "black"};
// console.log(car);
// console.log(typeof car);
// console.log(car.type);
// console.log(car.type = "Toyota");
// car.wheels = "4";
// console.log(car);
// console.log(car.wheels = "4");


// Challenge 12s)

// m (a, b) {

//     return a * b;
// }

// const c = m(10, 20);
// console.log(c);


// Challenge 13 (string/template literals)

// const text =`The quick
// brown fox
// jumps overs
// the lazy dog`;

// console.log(text);

// const firstname = "fahad";
// const lastname = "fatima";

// console.log(`${firstname} ${lastname}`);


// greet(username){
//     return `Hello ${username}`;
//  }


// Challenge 14 

// ====(i)(REFACTOR ES5 CODE TO ES6) ENHANCED OBJECT LITERALS====


// //ES5 CODE (QUESTION):

// var a = 1;
// var b = 2;
// var c = 3;

// var obj = {
//         a: a,
//         b: b,
//         c: c,
//     };

// console.log(obj);

// //ES6 CODE (SOLUTION):

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = {a, b, c};

// console.log(obj);


// ====(ii)====


// ES5 code(Question)


// var lib = {
//     sum : function (a, b) {
//         return a + b;
//     },

//     multi: function (a, b) {
//         return a * b;
//     },
// };

// console.log(lib.sum(2, 3));  //5
// console.log(lib.multi(2, 3)); //6

//ES6 code(Solution)

// const lib = {
//     sum : (a, b) => a + b,
//     multi: (a, b) => a * b,
    
// };

// console.log(lib.sum(2, 3));  //5
// console.log(lib.multi(2, 3)); //6

//===(iii)===
//ES5 code (Question)

// function getPersionES5(name, age, height) {
//     return {
//         name : name,
//         age: age,
//         height: height,
//     };
// }

// getPersionES5("fahad", 23, 200);

//ES5 code (Solution)

// function getPersionES6(name, age, height) {
//     return {name, age, height,};
    
// }
// console.log(getPersionES6("fahad", 23, 200));

// Challenge 15:

// function multiply (a, b = 2) {
//     return a * b;
// }

// console.log(multiply(2, 3));    //output = 6
// console.log(multiply(4));       // output = 8 

// //because 4 which i provided
// //it will be the value
// //of a, the value of will be 1 which i had already set at top


// Challenge 16

// let arr = [1, 2, 3];
// let arr2 = [4, 5];

// let arr3 = [...arr, ...arr2];
// console.log(arr3);


// const user = {

//     name : "fahad",
//     age : 23,
// };

// const clone1 ={...user}
// console.log(clone1);


// Challenge 17

// function fahad(...a) {

//     // console.log(x);
//     console.log(a);
   
// }

// fahad("fahad", "fatima", "ali", "zain")
 
// // Challenge 18(Destructuring Challenge of Array)


// const colors  = ["red", "green", "blue", "yelllow", "orange"];

// const [color1, color2, color3 ] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);


// Challenge 19(Destructuring Challenge of Objects)

//Question:
// const  = {
//     name : "fahad",
//     age : 30,
//     gender : "female",
//     country : "Pakitan",

// };

//Solution:

// const {name, age, country} = ;

//I can also destructured it in reverse 
//order but it give output in linear order
// so i dont need to reverse it its like not a good approach...

// const {country, name, age} = ;

// console.log(name);
// console.log(age);
// console.log(country);



//Question:
// const person = {
//     name : "fahad",
//     age : 30,
//     gender : "female",
//     country : "Pakitan",

// };

// const {name, age, country} = person;

// console.log(name);
// console.log(age);
// console.log(country);

// Now rename them code:

// const person = {
//     name : "fahad",
//     age : 30,
//     gender : "female",
//     country : "Pakitan",

// };

// const {name: personName, age: personAge, country: personCountry} = person;

// //After renaming the names i will get the same content...
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);


// Challenge 20(Ternary operator)


// let personmoney = true;

// let havemoney = personmoney === true ? "buy products" : "They should bring money";

// console.log(havemoney);

// Challenge 21 (for in loop)

// const obj = {a: 1, b: 2, c: 3};

// for(let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
    
// }


// Challenge 21 (for of loop)

// let array1 = ["a", "b", "c"];

// for(let key of array1) {

//     console.log(key);
    
// }

//output

// a
// b
// c

// Challenge 22(forEach loop)

// let num  = [1, 4, 6, 7, 9];
// let sum = 0;

// function adder(num) {
//         sum += num;
// }

// num.forEach(adder)

// console.log(sum);


// Challenge 23 (map function) 

//Two ways:

//1 way.....(arrow function as one parameter so i did't put {} and return)

// const num = [1, 3, 5, 6, 9, 0];

// const item = num.map((num)=> num * 10)

// console.log(item);

// //2 way......(as its one parameter i don't need to put {} nd return but i did)

// const num1 = [1, 3, 5, 6, 9, 0];

// const item1 = num1.map((num) => {
//     return num * 10;
// })

// console.log(item1);
                                  
//3 way......(simple function not arrow)

// const num2 = [1, 3, 5, 6, 9, 0];

// function myfunction(num) {
//     return num * 10;
// }

// const newarr = num2.map(myfunction)
//     console.log(newarr);
    

// Challenge 24(Filter Method).... 1 way:

// const ages = [20, 24, 30, 18];

// function checkadults(ages) {
//     return ages < 30;
// }

// const res = ages.filter(checkadults);
// console.log(res);


// // Challenge 24(Filter Method).... 1 way:

// const words = ["spray", "limit", "elite", "hero", "destruction", "present"];


// const res = words.filter(word => word.length > 6)
// console.log(res)


// Challenge 24(Filtr Method).....1 way

// const ages = [1, 4, 6, 8]

// const res = ages.find((age) => {

//     return age > 6      //return one element so less powerful but filter gave all elements which are above 6 so its mire powerful...
// })
// console.log(res);

// Challenge 24(Filtr Method).....2 way


// const ages = [1, 2, 3, 5]

// function checkage(ages) {
//     return ages > 3;
// }

// const res = ages.find(checkage)
// console.log(res);

// Challenge 24(Filtr Method).....3 way


// const ages = [1, 2, 4, 5]

// const res = ages.find((age) => age > 3)
// console.log(res);


// Challenge 25 (Reduce Method)....

// const numbers = [1, 2, 4, 5]

// function calculateProduct(arr){
//    return arr.reduce((accumulator, currentvalue) => 
//         accumulator * currentvalue )
// }

// const product = calculateProduct(numbers);
// console.log(product);

// Challenge 26 (Map helper)....


// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2)
// map1.set("c", 3)

// console.log(map1.size);
// map1.delete("b");
// console.log(map1.size);
// console.log(map1.get("a"));

// Challenge 27 (Set Method)

// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// console.log(letters);


// for (let item of letters){
//     console.log(item);
    
// }

// Challenge 28(symbol)


// const symb = Symbol("foo");
// console.log(symb);

// console.log(typeof symb);

// const obj = {};

// obj[Symbol] = "here is symbol value"
// console.log(obj);


