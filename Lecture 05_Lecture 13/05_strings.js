//========String Declaration=============//
//Behind the scene it also behaves as an object...
const name = "noor"
const repoCount = 50

//1-way---Its old way to print something on console I don't recommend this:
console.log(name + " " + repoCount + " Value");

//2-way---New way to print something on console:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//3-way---New way to print something on console

const gameName = new String("football-noored-vwfs")

//when I will write gameName on console I will see this output:
// 0 : "f" (Its not array its an key-value pair... "0 is key and n is value")
console.log(gameName);

//Access key value on terminal:

console.log(gameName[0]);
console.log(gameName[1]);

//Access different methods of Proto in string...

console.log(gameName.__proto__);        //{}
console.log(gameName.length);           //output = 8
console.log(gameName.toUpperCase());    //output = FOOTBALL
console.log(gameName.charAt(2));        //output = o
console.log(gameName.indexOf("f"));     //output = 0

//Substring Method:
const newString = gameName.substring(0, 4)  //0-4 means total 4 
console.log(newString);                  //output = foot ;

//Slice Method:
const anotherString = gameName.slice(0, 4)
console.log(anotherString);              //output = foot

const newString1 = gameName.slice(4, -8)  // output = ballno...start sy 4 total or end sy 8 total baki output
console.log(newString1);

//Trim Method(remove whitespaces)
const newStringone = "     noor   "
console.log(newStringone);        //output =     noor
console.log(newStringone.trim()); //output = noor

//Replace Method(to replace with new keyword)
const url = "https://www.google.com%20choudhary"
console.log(url.replace(`%20`, `-`));

//Includes Method(to check whether this keyword present or not)
//Return value in true or false....

console.log(url.includes('noor'));
console.log(url.includes('google'));

//Split Method:

console.log(gameName.split('-'));
