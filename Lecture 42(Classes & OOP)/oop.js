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


const promiseOne = new Promise()        //yahan pr jo new keyword h na ye basically construtor function hai..
const date = new Date();                //yahan pr jo new keyword h na ye basically construtor function hai..
                

