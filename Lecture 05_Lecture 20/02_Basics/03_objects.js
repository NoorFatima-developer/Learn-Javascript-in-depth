// Object declare two ways:
// Literals and Constructors...

//singleton:

//When we declare as a literals then singleton nahi bnta hai...
//constructor sy aghr bnyga tu han singleton bnyga...



//object literals

// object.create---->constructor method..(but we will discuss later)
//This is an object....nad object k andr keys and values ka chkr hota hai... but array k index hoty hain jesy 0 index 1 index.. 

//Symbol data-types...

const mysymb = Symbol("key1")


//object with literals...
const JsUser = {    
    name: "noor",       //name is also string as well...
    "fullname": "noorfatima",
    age: 18,
    location: "Lahore",
    email:"noorfatima@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"],
    [mysymb]: "mykey1"      //also usable but its good to use in [] but can practice without []
}

console.log(JsUser.email);          //right but not useable
console.log(JsUser["email"]);       //perfect way...

console.log(JsUser["fullname"]);
console.log(JsUser[mysymb]);

//redeclare object:

JsUser.email = "nahfatima@gmail.com"

//Freeze object so now i cannot see the next updated email...
Object.freeze(JsUser)
JsUser.email = "ahhhhlasjdbm"   ////like it will 
console.log(JsUser);            

//=======Function===============//


//Once I will commen whole code then it will work:
//with greeting and without greeting...

JsUser.greeting = function(){
    console.log("Hello JS User...");    
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user , ${this.name}`);         //String interpretaion wo write in back-ticks..and ye jo this h islye use kea h k aghr kisi obj ko refer krna ho tu this ksath object name likhny sy wo oss obj ki properties ko show krdeta hai...
}
    
// console.log(JsUser.greeting);           //output = function(anonymous)
// console.log(JsUser.greeting());         //output = Hello JS User...
// console.log(JsUser.greetingtwo());      //output = Hello JS User, noor


