// jesa k hum array pr for-of loop deestructuring krk laga skty hain by [key, value],,, wesy
//hum object pr nahi laga skty by [key, value] , laga skty hain but kisi or way sy destructure krk
//oska method hmry ps different hota hai...
//Islye ab hum object ko further discuss krygy....
//ku k objects pr b tu loop lagana e hai na chor tu nahi skty na hum...

//Further discussion of object:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby'
}

//OBJECTS PR HUM FOR-IN Loop lgaty or array pr hum FOR-OF Loop lagaty hain...

//Example 01:(FOR-IN LOOP ON OBJECTS)

for (const key in myObject) {
    //print just keys on console:
    // console.log(key);  
    //i also wanna print value of myObject so i will use this:
    // console.log(myObject[key]); //now it will just print values.. 
    //i also wanna print key + value:
    // console.log(`${key} shortcut is for ${myObject[key]}`);   
}

//FOR-IN LOOP ON ARRAY:(jesy object ki keys hoti hai essy e array ki b keys hoti hain 0,1,2, 3 etc)
const programming = ["js", "rb", "py", "js", "cpp"]

for (const key in programming) {
    // console.log(key); // this will print index...
    //No I wanna print values with keys... so use this:
    //halank for-of loop jb hum arrays pr lagaty hain tu wo values b de-deta hai but for-in loop ni deta tu hum sath array jis variable m store hai wo pass krygy tu wo automatically print krdyga...
    // console.log(programming[key]); // this will print values of key as well...
}


//FOR-IN LOOP ON MAP FUNCTION:

//Map function iteratable nahi hai islye ye kuch b print ni kryga ...
const map = new Map();

map.set("IN", "India")
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India")


for (const key in map) {
    console.log(key);
    
}