//object with constructors...


// //non-singleton object:(literals)
// const tinderuser1 = {}
// console.log(tinderuser1);        //output = {}
    
//singleton object:(construtor)

//Example 01:
const tinderuser = new Object()
console.log(tinderuser);            //output = {}

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.loggedIn = false

// console.log(tinderuser);        //outout = { id: '123abc', name: 'Sammy', loggedIn: false }


//Example 02:(Nested objects)

const regularUser = {

   email: "nahfatima@gmail.com",
   fullname : {
    userfullname : {
        firstname : "noor",
        lastname : "fatima"
    }
   }
}

console.log(regularUser);          //output = { email: 'nahfatima@gmail.com', fullname: { userfullname: { firstname: 'noor', lastname: 'fatima' } } }
console.log(regularUser.fullname?.userfullname.firstname);   //output = noor,, question mark is basically behaving as an if else condition and and its called ternary operator...



//Example 03:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


//This giving me the output of all objects but I want whole output in single object so i will not di it like this:
const obj4 = { obj1, obj2, obj3}
console.log(obj4);

//This statement will give me output be in one object:but its not most usable object...
const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);          //output = { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Spread operator is perfect and most suitable and recent method so I will use this:

const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);          //output = { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Example 04:
//array m bht sary objects.. jesy object m object hoskty hain essy e array m b bht sary objects hoskty hain...
 const users = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "John Doe"
    },
    {
        id: 3,
        name: "John Doe"
    },
    {
        id: 4,
        name: "Jane Doe"
    }
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));       //result in array form
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

//Example 05:

//to check is this value exist or not...
console.log(tinderuser.hasOwnProperty("loggedIn"));     //output = true
console.log(tinderuser.hasOwnProperty("isloggedIn"));   //output = false



