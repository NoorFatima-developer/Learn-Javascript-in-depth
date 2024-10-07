///////COMMON COMPARISON OPERATORS ARE///////////////

console.log(2 > 1);         output = true
console.log(2 >= 1);        output = true
console.log(2 < 1);         output = false
console.log(2 == 1);        output = false
console.log(2 != 1);        output =true

//Now...

console.log("2" > 1);       output = true   
console.log("02" >1);       output = true

//=====================AVOID THESE CONVERSIONS(MAKE CODE CLEAN)==================
//All comparisons are behave differently...
//null convert it into 0..
console.log(null > 0);      // 0 > 0 -> output = false
console.log(null == 0);     // 0 == 0 -> output = false (comparison operator(==) behave different from equality(=) operator)
console.log(null >= 0);     // 0 >= 0 -> output = true

//I n undefined case it will return false:
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

// console.log("2" = 2);       // does not exist give error message

console.log("2" == 2);      //output = true

console.log("2" === 2);     // output = false; (because =, ==, === all of these behave differently)



///===============Null ka mtlb 0 ni h empty ni h null ka mtlb h 1 dm khali==========

