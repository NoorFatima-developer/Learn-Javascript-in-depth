
//Example 01:value o then -->by-default understand true

const userEmail = "nf99noorfatima@gmail.com";

//ab meny yahan userEmail = true ni kea just oper initialize kea hai tu by-default wo understand kryga k wo true value hai or first console.log ko print krdyga...
if (userEmail) {
    console.log("Got user email");
    
}

else {
    console.log("Don't have user email");
    
}

//output of this code is: Got user email

//Example 02:""-->by-default understand false

//ab meny yahan userEmail m kuch value ni di empty string hai tu wo by-default isko false smjyga or else block ko run kryga
const userEmail1 = "";

if (userEmail1) {
    console.log("Got user email");
    
}

else {
    console.log("Don't have user email");
    
}

//output of this code is: Don't have user email

//Example 03:""-->by-default understand false

const userEmail2 = " ";

if (userEmail2) {
    console.log("Got user email");
    
}

else {
    console.log("Don't have user email");
    
}

//output of this code is: Got user email


//Example 04:[]-->by-default understand true

//ab meny yahan userEmail m kuch value ni di empty string hai tu wo by-default isko false smjyga or else block ko run kryga
const userEmail3 = [];

if (userEmail3) {
    console.log("Got user email");
    
}

else {
    console.log("Don't have user email");
    
}

//output of this code is: Got user email


//NOTES:

//by-default true values:

//string k andr koi b value add o gi tu mtlb wo truthy value bn gi hai....

//const user = "noor" -> true;
//const userEmail = " " -> true
//const userEmail = "0" -> true
//const userEmail = 'false' -> true
//const userEmail = [] -> true
//const userEmail = {} -> true
//empty function is also a truthy value:
//const userEmail = function(){} -> true


//by-default false values:

//const user = "" -> false;
 //const userEmail = undefined -> false
 //const userEmail = null -> false
 //const userEmail = 0 -> false
 //const userEmail = -0 -> false
 //const userEmail = false -> false
 //const userEmail = NaN -> false
 //const userEmail = BigInt 0n -> false


 //compare false values and result is in true value:

 //false == 0 --> true;
 //false == '' --> true;
 //0 == '' --> true


 //Check array is empty: (in condition)
 const emptyArray = [];
 if(emptyArray.length === 0) {
    console.log("Array is empty");
    
 }

 //check object is empty:(in condition)
 const emptyObject = {};
 if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
 }


 //Nullish Coalescing Operator (??): null undefined
 //Why used this? 
 //Ans: Jb hum database sy call krygy, firewall ka use krygy appwrite wagaira ka use krygy tu kbi b directly reponse ni milyga 2
 //values milti hain ya hoskta hai null value reponse m ajye ya hoskta hai k reponse aye hi na mnz undefined ajye tu ossklye ye specially desgined kea gya hai k aghr null value hai tu null reponse ajye, undefined
 //hai tu undefined assign krdo,, ya koi or value hai tu wo assign krdo....

 let val1;                      //variable declaration
 val1 = 5 ?? 10                 //variable initialization 
 console.log(val1);             //output = 5

 val2 = null ?? 10  
 console.log(val2);             //output = 10
            
 val3 = undefined ?? 15         
 console.log(val3);             //output = 15

 val4 = null ?? 10 ?? 20        
 console.log(val4);             //output = 10
 
//Terniary Operator: (its basically syntax of if else or we can say shortcut of if-else)
//Syntax of terniary operator is:
// condition ? true : false

//After ? behaves as if(true) and after : behaves as else(false)
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//NOTE:::
//Nullish Coalescing Operator (??) and Terniary Operator both are purely different operators..their scope , behaviour everything behaves different..