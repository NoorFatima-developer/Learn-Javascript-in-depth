//====1---------- Example of Object Literals is as follows:


// property ka use ye h k meny const ka use kea hai and method ks
// mtlb ye h k meny function ka use kea hai...

const user = {
    username: "noor",       // object is in key value pair..username i skey and noor is value..
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database...");
        console.log(`Username: ${user.username}`);
        // ye oper wala kam m this keyword sy b krskti o and iska main kea use prupose etc wo hum prototype wali video m prygy...
        console.log(`Username: ${this.username}`); 
        // ===define this in Local Context === // 
        console.log(this);      //gives me the value of current context which is whole object data...    
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// What will happen if i will define this in global context?
console.log(this);  //output = {} (iska mtlb ye h k abhi global context mai kuch b nahi hai.)


//====i---------- Example of  Construtor Functions is as follows:

// const promiseOne = new Promise()         //yahan pr jo new keyword h na ye basically construtor function hai....
// const date = new Date();                 //yahan pr jo new keyword h na ye basically construtor function hai..
                
// Example 01-----:

function userone(username, loginCount, isLoggedIn){
    // aghr m below statement this k bagair likhogi tu kesy pata chlyga k konsa username variable h or konsa username value h
    // wesy no doubt hmy pta hota hai lkin fer b specify krna is a good practice.
    // username = username
    // so i will use this...like this:

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // ab is "this keyword" k andr hum 1 or function b load krskty hain like this:
    // greeting is a variable in which i am passging function...
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    } //ab jb hum ikso run krygy tu result m osk ps ye method b availabale hoga...
    // return basically implicitly define hota e h islye likhy ya na koi b frq ni prta hai...
    return this;
}

// console.log(userone);

// Ab aghr m yahan pr new keyword use ni krti na tu userthree jo k updated h whi bs console pr print hoga lkin usertwo o ga e ni
// islye tu this keyword bht e important hai...

// without new keyword it will not work...
// const userTwo = userone("noor", 1, true);
// const userthree = userone("fatima", 2, false);

// Tu yehi tu bt hai constructor function ki jo k hmy new instance deta hai hr dfa new copy deta hai..ab oss copy k sath jo b play krygy wo hmry hawaly hai 
const userTwo = new userone("noor", 1, true);
const userthree = new userone("fatima", 2, false);

console.log(userTwo);
// ab yahan pr abstraction b horha hai , encapsulation b horha hai ..mtlb user ko ni mtlb greetings m kea hora h etc.and username kahan pr ja k store horha hai tu encapsulation b horhi hai...
console.log(userTwo.constructor);       // output = [Function: userone]

console.log(userthree);

// Example 02-----:

