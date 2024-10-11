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

