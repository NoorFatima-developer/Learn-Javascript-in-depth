//==============for-of and for-in loop:==============//

//Jesy hum array m string pass krty hain wesy e hum array mai object b pass krskyt hain...

// ["", "", ""]
// [{}, {}, {}]

//i--- for-of loop:(on array)

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {        //here num basically is a variable where value of arr will store...i can give any name of this variable...
    console.log(num);
}

//ii--- for-of loop:(on string)

const str = "Hello World!"

for (const st of str) {
    if(st == " ")
        continue;
    console.log(`Each char is ${st}`);
}

// Map Function in javascript:

//Map apny apmai b 1 object hai wesy tu hr chez e javascript mai object hai...
//And jesy object key-value hold krta hai wesy hi map b 1 object hai tu it holds key-value pairs ...

//map on string
const map = new Map();

//Jis order m print krwaty hain oss hi order m values rehti hain and secondly unique values ko print krta hai aghr 2 values same hain tu ye single time e print kryga...

map.set("IN", "India")
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India")

console.log(map);


//How can I put for-of loop in map function???

//But it will print key and value in array..

for (const key of map) {
    console.log(key);
}

//So use key and value separately to prinT key and value separate...
//So, I will destructure of array like this:

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

//map on object:

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);           //gives error
    
// }


//NOTES:

//So, it means we can set for-of loop on map function OF ARRAY, we can set for-of loop on array and by destructuring of array, but we cannnot
//apply for-of loop on object.. mtlb jesy destructuring hum array pr krty hain jis syntax sy wesy hum object pr ni krskty apply e ni hoti oska method alag hai...

