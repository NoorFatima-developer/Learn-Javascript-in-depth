//Control Flow:(In this 01_one.js I discussed about:

// if, else, if else, implicit scope, explicit scope, operators, Assignment operator(=), comparison operators (==, ===) etc...&& operators and || operators...

//1-----if Condition:-------//

if (true){

    // this code will be executed because in codition i write true...

}

if (false){

    // this code will not be executed because in codition i write false...

}

//How can Evaluate:
//Example 01:

const isUserloggedIn = true     //this is assignment operator to check is it true or false...

    if (isUserloggedIn)         //comparison kesy kesy askta hai???
{


}

// **Comparison Operators**//

// =(assignment operator), <, >, <=, >=, ==(comparison(don't check data-type)), !=, ===(comparison operator)(check data-type as well...)
//, != 

//NOTE: ye jo single qual to hai(=) ye operator assignment ka hai... check krny klye k ye true hai ya false..
// lkin ye double qual to (==) ye comparison hai jo check krta hai k ye next value ka comparison h ya nahi...

//Example of ==, and ===

//EXAMPLE 01(==)

// if ( 2 == "2") {
//     console.log("Executed");      //output = Executed(it does't check data-type)
    
// }

// //EXAMPLE 02(===)

// if ( 2 === "2") {
//     console.log("Executed");      //output = ...(print nothing because 2 != 2 pehla 2 num h and next 2 string hai so ye === check data-type as well.)
    
// }



//2----else Condition:----

const temparature = 41

//Which condition will be executed from if or elase? it depends on the condition...

if ( temparature === 31) {
    console.log("It's a hot day");
}

else {
    console.log("It's not a hot day");
}

//This console which is not in codition will always execute..

console.log("Execute");


// var ka scope global hai and let, const scope local scope hai.. and scope is basically {}...

//Example 01:

const score = 200

if ( score > 100 ) {

    let power = "noor"
    // console.log("User power: " + power);
    //I can use this as well:
    console.log(`User power: ${power}`);        //User power: noor

}

// console.log(`User power: ${power}`);  //I comment this line because i use let and its local scope but this console is in gloal scope and gives error that's why i comment it out...

//it will not run because let power = "noor" is in local scope and i used let which is also local, 
//const is also local whehn i will use var then it will become global so that's why we avoid from var...

//Example 02:


const score1 = 200

if ( score > 100 ) {

    var power = "noor"
    console.log("User power: " + power);        //User power: noor
    //I can use this as well:
    console.log(`User power: ${power}`);        //User power: noor

}

console.log(`User power: ${power}`);            //User power: noor

//NOTES:

// var is global scope and let is local / block scope,,,

// scope ye hota hai {}, and implicit scope ye hota hai:

//Example of implicit scope:(implicit scope mai hum console.log wali statement ko 1 e line m krdety hain)

const balance = 1000

if ( balance > 500 ) console.log("Hi I am noor");   //Hi I am noor
//But if I have multiple scopes then still I will use implicit scope?
//Yes I can use implicit scope by using comma if i have more scopes but its very bad approach , code will not be more readable
//SO MUST AVOID THIS:

// if ( balance > 500 ) console.log("Hi I am noor"), console.log("Hi I am fatima") //no doubt it will print statement on console but its not usable and good code so avoid

//Example of explicit scope:(explicit scope mai hum console.log wali statement ko curly braces m matlb scope m krdety hain)

const balance1 = 1000

if ( balance1 > 500 ) {

    console.log("Hi I am noori");           //Hi I am noori

}

// =====Multiple if else conditions:====
//Example:

// const balance2 = 1000

// if(balance2 < 500) {
//     console.log("less than 500");
// }

// else if(balance2 < 750) {
//     console.log("less than 750");
// }

// else if(balance2 < 900) {
//     console.log("less than 900");
// }

// else {
//     console.log("less than 1200");

// }

//======&& operator========//

//Example:

const userLoggedIn = true
const debitCard = true

//yahan && ka mtlb dono chezain true honi chye jesy 2 == 2 hpga tb e ye chlyga

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
    
}

//=====|| operator========//

//Example:

const LoggedInfromGoogle = false
const LoggedInfromEmail = true

//mtlb dono m sy 1 true o gi condition...jismai true pryga jesy yahan google wali m true pra hai 1 true h tu mtlb log wali statment print o jygi
if ( LoggedInfromGoogle || LoggedInfromEmail ) {
    console.log("User logged In");
}

