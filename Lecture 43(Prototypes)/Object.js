// Iss mai hum ye disucc krygy


//  ==== QUESTION 01 ===
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


//  ==== QUESTION 02 ===

// ======Now Again dicuss "this" keywrord in function and Significance of "new keyword"====...

// "this" keyword in simple words is k jisny b bulaya hai osk pass hi jao...

function createuser(username, score){
    // yahan tu "this" keyword differentiate krny kley likha hai k konsa variable hai and konsi value hai...
    this.username = username;
    this.score = score;
}

// ab aghr m score++ k sath "this" keyword ni lagaogi tu osko pata nahi lgy ga k user1 ko ++ krna hai ya user2 ko...
// so this lagany k bd ye bt kafi hd tk clear o jygi lkin abi b pura kam ni hoa..

// And 1 or baat ye hai k jo prototype keyword lgya hai na ye smjany jlye lgya hai k behind the seen kesy hum objects ko access krskty hain by using
// prototype .. ab object k andr aghr hum console m dekhain tu alot of objects hoty hain...
// mnz ye k prototype k andr prototype phr prototype..tu ab hum kitny prototypes func k sath likhy islye by-default behaviour m hum 1 b nahi likhty or kam chl jata hai...

createuser.prototype.increment = function(){
    this.score++;
}

// ye function basically increment krny klye use kr rye hain...

createuser.prototype.printMe = function(){
    console.log(`Price is: ${this.score}`);
}

console.log(createuser);

// ab this tu oper use krlea tha lkin osko konsa this? user1 ka ya user2 ka this? tu islye this keyword k sath "new" keyword utana e important hai...
const user1 =  new createuser("John Doe", 100);
const user2 =  new createuser("John Raye", 200);

console.log(user1);
console.log(user2);

user1.printMe();
user2.printMe();

