// I want k variable m jahan value store h na osk sath aghr whitespaces b hain tu jb m print kro wo na aye...

// Example 01(End m Final Result Hoga with new example:):

let myname = "noor   ";
let myname2 = "fatima";

console.log(myname.length); // console mai ye 7 dera hai output ku k ye whitespaces ko b add kr rha hai...
console.log(myname.trim().length); // console mai ye 4 dera hai output ku k ye whitespaces ko  remove kr rha hai trim()...

// Lkin problem ye h k mery ps jb alot of variables hongy tu tb kea m itny sary trims use krogi??
// Nahi na tu what i will do now?

// Example 02:(Object...AND Array Injection)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "webs",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.thor}`);
        
    }
}

Object.prototype.noor = function(){
    console.log("This is a custom method");
}

// Object k andr 1 new object ko inject krwya hai
heroPower.noor()
// Array ko meny yahan object k andr inject krwaya hai jo k possibke hai
myHeros.noor()

Array.prototype.fatima = function(){
    console.log("This is a custom method");
}

// Yhan meny array ko array k andr inject krwaya hai jo k possibke hai
myHeros.fatima()
// Yhan meny object ko array k andr inject krwaya hai
// heroPower.fatima()       //gives error:


// NOTE:
// Array , string, function sb point krty hain ===> object ko or object point krta gai ==>null.

// Islye;
// Array k andr array ko inject krwa skty hain.
// Object k andr object ko inject krwa skty hain.
// Array k andr object ko inject krwa skty hain..
// Lkin object k andr array ko ni krwa skty ku k object k andr null hai and object final hai.
// Mtlb funciton bana k like above:

// ====1 or important bt ye h k sbk ps power h k object k andr inject o sky
// lkin ab ye ni k array k andr string, ya array k andr function ya string k andr fucn
// mtlb apis m ye ni hoskty...


// ===========INHERITANCE:===============

// Pehly zamany m esa e tu hota hota tha k hr chez ka object banaty thy ku k classes nahi hoti thien
// lkin ajkal classes hai tu ab hum classes ko use krlety hain...

const user = {
    name: "John Doe",
    age: 25
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupoort = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // Ab m TASupport k andr TeachingSupport ki properties ko acces krna chahti hon so i will do this:
    __proto__: TeachingSupport
}

// ab ye proto ko oper meny TASupport k andr kea hai local scope m mai isko bhr yani global scope m b krskti hon..
// Teacher user ki sari properties ko essy access krskta hai...

Teacher.__proto__ =  user;

// Modern Syntax:

// TeachingSopprt apny andr Teacher ki sari properties ko access krlyga by using this syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)

// Example 01(Example how remove whitespaces with just one property):

let anotherusername = "noorfatima      ";
let anotherusername1 = "noorfatima      ";

String.prototype.trueLength1 = function () {
    console.log(`${this}`);
    // console.log(`${this.anotherusername}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherusername.trueLength1()
"hitesh".trueLength1();
"hira".trueLength1();