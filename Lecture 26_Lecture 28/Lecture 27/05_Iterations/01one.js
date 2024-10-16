// Loops in javascript:

//1----for loop in javascript:-----

//in for loop: let i = 10 its variable declaration & initialization and 
//array.length will check condition,if true tu ye scope k andr a k print krdyga 
//or phr bhr a k increment kryga and phr tbtk chly ga jbtk condition false 
//ni hojti or ye loop sy bhr ni ajata....

//Example 01:

for (let i = 0; i<=10; i++) {
    const element = i;
    console.log(element);
    
}

//Example 02:

for (let i = 0; i<=10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
        
    }

    console.log(element);
    
}

//Nested Loop:

for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Inner Loop: ${j}`);
    }
}

//Print tables from 0 to 10

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
        
    }  
}

//Print Array:

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i <= myArray.length; i++) {     //as i<= myArray.length that's why its giving to me undefined at end...
    console.log(myArray[i]);
}

//two important keywords in javascript:

//i--break, and ii--continue:

//i-break:
for (let i = 0; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`);
        break;      //jahan break ajta hai osk bd wala content print ni hota:
    }
    console.log(`Value of i is ${i}`);
    
}

//ii-continue:
for (let i = 0; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`);
        continue;      //continue m 1 dfa maafi mil jti h mtlb m 5 k bd lgya hai na continue tu wo 5 ko skip krdyga or agli sari statements ko print kryga onko skip ni kryga...
    }
    console.log(`Value of i is ${i}`);
    
}