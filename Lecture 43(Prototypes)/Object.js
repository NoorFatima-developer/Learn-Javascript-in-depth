// Iss mai hum ye disucc krygy
// <!-- "Function" k andr ====> Object???(kea function b 1 object hai???) -->


// Clear with example:(Is function also an object?)

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));        //output = 25
console.log(multiplyBy5.power);     ////outout = 2 (iska mtlb ye h k function b 1 object e hai ku k meny isko access krlea hai)
console.log(multiplyBy5.prototype); ////output = {} (empty object e aya hai output mai)


// So 1 bt tu clear hogi h at the end of the day everything is object in javascript...
// mtlb function jo h function tu h  apny andr lkin zrort prny pr wo 1 object ki trhan b behave krta hai...

// ====Now Again dicuss "this" keywrord in function====...
// "this" keyword in simple words is k jisny b bulaya hai osk pass hi jao...

function createuser(username, score){
    // yahan tu "this" keyword differentiate krny kley likha hai k konsa variable hai and konsi value hai...
    this.username = username;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}

const user1 =  createuser("John Doe", 100);
const user2 =  createuser("John Raye", 200);