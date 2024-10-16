//Lecture 23

//This and Arrow Function in javascript
//This keyword basically refer current context....

const user = {

    username: "noor",
    price: 999,

    welcomeMessage: function() {
        console.log( `${this.username} welcome to website`);    //this keyword refers current scope::: and iss time scope const user sy lek end bracket tk jo b hai wo curent scope hai..
        console.log(this);  //gives contextual information
        
    }

}

user.welcomeMessage()   //output: noor welcome to website

//when i will change context means change value or variable then it eill be change..
user.username = "fatima"
user.welcomeMessage()   //output: fatima welcome to website

console.log(this);      // function k bhr means at the end of global scope which is {} , the value of this will be {} because we are using node .. but when we will run this in console then will get object of window...


//Interview Question:
//browser k andr global object window hai..

//Print this value inside function like this:

function chai() {
    console.log(this);
    
}

chai()     //utput glibal object of window..same which gives in console..coz we are calling it inside function...

//NPrint value of this inside function but with variable like this:

function chaii() {
    let usernamed = "Ali"
    console.log(this);
    console.log(this.usernamed);        //output undefined it means simply this gives global obj in function but with variable not works gives undefined.. it means cant do inside function like this when decalre a variable..

}

chaii()

//Gives same output undefined as above when we save it in a variable:



function chaiii() {
    let usernamedd = "Ali"
    console.log(this.usernamedd);        //output undefined it means simply this gives global obj in function but with variable not works gives undefined.. it means cant do inside function like this when decalre a variable..

}

chaiii()

//=====Arrow function======//

const code = () => {
    let usernam = "farah"
    console.log(this);
    
}

code()          //output = {} same output of arrow func which was in simple function..

//=====Arrow function======//

//Basic syntax is: 1---way:

const addtwo = (num1, num2) => {
    return num1 + num2;         //explicit return
}

console.log(addtwo(5, 7));     //output = 12

//2---way:

const addtwoo = (num1, num2) => num1 + num2
console.log(addtwo(5, 7));     //output = 12

//3---way: 

const addtwooo = (num1, num2) => (num1 + num2)      //implicit return

console.log(addtwo(5, 7));     //output = 12

//4---way(How can use arrow func when we use object):

const addthree = (num1, num2) => ({usernami: "fatima"} )    //without () object will not work...

console.log(addthree(5, 7));     //output = { usernami: 'fatima' }


