//Lecture 21

var c = 300
let a = 300
const b = 10

if (true) {

let a = 10
const b = 20

//That's why we aoid from var...because we declare it before if block it will print if block value on console...
var c = 30

console.log("Inner a: " , a);

}



console.log(a);     //gives output 300 because a is defined at top but when I will not defined it at top then it will give error that a is not defined...

// console.log(b);         //gives error that b is not

console.log(c);


//NOTE: curly brace {} is basically a scope... 
//and iss scope ka global scope sy koi khas link ni
//hota halank jo b global scope m hai wo ap function k andr access krskty ho lkin jo b scope new banaya hai oss sy koi b information bahar leak ni honi chahye...

//Simple c kahani ye hai k aghr let or const ko at top define ni kea tu wo consolr pr print ni kryga lkin aghr print kea h tu output dedyga...
//Lkin var m aghr if block k andr value declare ki h tu wo console pr whi print kryga beshk m at top pr declare krdo...ku k var ki value by default undefined hoti h isleye hum mostly var sy avoid krty hain...

//NOTE:

//Global scobe different hai console m or node sy jb hum run krty hain code ko..



//Discuss about closures:::(nested function)
//Example 01:
//NOTE: Child function parent sy ice cream le skta hai but parent lay acha ni lgy ga...

function one() {                    //parent function
    const username = "Noor Fatima"

    function two() {                //child function
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);    //giving me error because i am calling it outside two function ...
    

    two();

}

    one();

//Example 02:

if (true) {
    const username1 = "hira"

    if(username1 === "hira") {
        const website = " google"
        console.log(username1 + website);
        
    }

// console.log(website);       error calling outside the block
    console.log(username1);     //giving right output because i am calling username1 in inside func not outside..
    
}

// console.log(username1);         error coz calling outside the block

//Lecture 22

//Example 03

//Part 01:(without storing value in variable)
function addone(num) {
    return num + 1;
}

console.log(addone(5))

//Part 02:
console.log(addone(5))

function addone(num) {
    return num + 1;
}


//Part 03:(by storing value in variable)

const addtwo = function(num) { 
    return num + 2;
}
console.log(addtwo(5))

//Part 04:(jb hum func ko call at top pr krwaty hain and func ko variable m store krty hain then ye error deta hai ye kehta hai k call at end kro tu yahan hoisting ka concetpt ata hai)
console.log(addtwo1(5))
const addtwo1 = function(num) { 
    return num + 2;
}