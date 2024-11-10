// Iss mai hum ye disucc krygy
// <!-- "Function" k andr ====> Object???(kea function b 1 object hai???) -->


// Clear with example:

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));        //output = 25
console.log(multiplyBy5.power);     ////outout = 2 (iska mtlb ye h k function b 1 object e hai ku k meny isko access krlea hai)
console.log(multiplyBy5.prototype); ////output = {} (object e aya hai output mai)
