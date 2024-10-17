//For Each return value or not?(if we store it in a separate variable)
//interesting bt ye hai k aghr hum forEach 1 aleda sy variable m store krty hain tu kea result ata hai???

const coding = ["js", "css", "jsx", "cssx", "python"]


const values = coding.forEach( (item) => {
    // console.log(item);
    
})

// console.log(values);        //gives undefined not return value...


//Try by using return keyword may b work:

const value = coding.forEach( (item) => {
    // console.log(item);
    return item;            
    
})

// console.log(value);             //still return undefined...


//Again try krti o mai console ko comment krk...

const value1 = coding.forEach( (item) => {
    // console.log(item);
    return item;            
    
})

// console.log(value1);        //still return undefined...

//===========NOTE======//

//For-each kisi b surat m value return nahi krta..


//=======Filter Method in javascript========

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter b apny andr callback e leta hai tu hum kuch iss trhan sy defined krskty hain...
const newnums = myNums.filter( (num) =>  num > 4)
// console.log(newnums);    //and when we don't use return then it may call implicit return...

//but aghr m isko scope k andr e likhna chahti o tu must use return keyword:

const newnum = myNums.filter( (num) => {
    return num > 4      //and when we use return then we may call it explicit return..
})
    
// console.log(newnum);    //return from new variable


//====NOTE====

//ForEach mai or filter m yhi frq hai k forEach mai hum easily return ni krwa skty lkin 
//hum filter method use krk easily valye ko return krwa skty hain when we store it in new variable....

//Lkin ye nahi k forEach mai wo hmy kbi value return e ni krta..krta hai lkin osklye hmy
//if condition ka use krna prta hai phr wo b same filter ki trhan e behave kryga...


//bs yahan pr ye hai k hmy logi lagani pr rhi hai otherwise hum forEach ka b use krskty hain aghr hum filter ka na chahy tu...
const newnu = []
myNums.forEach( (num) => {     //here num is basically a variable
    if (num > 4) {
        newnu.push(num)
    }     
})
console.log(newnu);    //return from new variable

//Example of array in which alot of objects ...And I am going to acces it by using filter:

const books = [
    {
        title: "Book 1",
        author: "Author 1",
        year: 2020
    },

    {
        title: "Book 2",
        author: "Author 2",
        year: 2015
    },

    {
        title: "Book 3",
        author: "Author 3",
        year: 2010
    },

    {
        title: "Book 4",
        author: "Author 3",
        year: 2025
    }

    //... and so on...
]

//as i am using filter method so i can make a separate variable and ca return from there so let's start:

let userBooks = books.filter( (bk) => bk.author === "Author 3")
userBooks = books.filter( (bk) => {
    return bk.year >= 2000 && bk.author === "Author 3"
})
console.log(userBooks);
