//What is function:

// A function is a block of code that performs a single task. It can be reused, which makes it easier to write, read, and maintain code.

//iska mtlb ye h k let say mery ps code h 10 lines ka 20 lines ka 50 lines ka whatever jitni b lines ka code h.. I will wrap it in a single package... and then resued where i want...


//Example:

//I have alot of print statements:
console.log("N");
console.log("O");
console.log("O");
console.log("R");

//In this I can wrap it in a single package called function:

function printName() {
    console.log("N");
    console.log("O");
    console.log("O");
    console.log("R");
}

printName()

// in function passing parameters and arguments:
// in function definition we pass parameters in function..
// in function calling we pass arguments in function....


function addtwoNumber(number1, number2) {
    console.log(number1 + number2);
    
}

addtwoNumber(5, 7)      //output = 12
addtwoNumber(5, "a")    //output = 5a
addtwoNumber("3", "4")  //output = 34
addtwoNumber(3, null)   //output = 3



function addtwoNumber1(number1, number2) {
    number1 + number2;
    
}

const result = addtwoNumber1(1, 2);
console.log("Result: " , result);


//function return 1 concept hai or console tu bs print krta hai...
//so now we will use resturn like this:

function addtwoNumber2(number1, number2) {

    let result1 = number1 + number2
    console.log("noor");
    
    return result1

    console.log("noor");    //return k bd kuch b print nhi hota hai
    
}

const result2 = addtwoNumber2(1, 2);
console.log("Result: " , result2);

//One new example of function:

function loginusermessage(username) {

    //both are same:

    // if(username == undefined) 

        if(!username){
        console.log("Please enter a yh");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("noorfatimah"))    //noorfatimah just logged in
// console.log(loginusermessage(""))           // just logged in

//as i am nit passign anything so value will be undefined...
console.log(loginusermessage())           // undefined just logged in


//NOTE:

//empty and undefined values are false values ye mana jta hai inhy..
//and ! mark true ko false m convert krdeta hai and false ko true m convert krdeta hai...
//example:

// if(!username) {             //username is undefined so it means its false so ! convert false into true and if condition will be true then if condition we wil bw fulfill..
//     console.log("Please enter a username");
//     return;
    
// }


//If I want to apply some default value then I can in parameter like this:
function loginusermessaged(username = "nah") {

    //both are same:

    // if(username == undefined) 

        if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginusermessaged())           // output = nah just logged in

//But if i will pass new value then it will over-ride with new value like this:

console.log(loginusermessaged("fatima"));   //output = fatima just logged in

