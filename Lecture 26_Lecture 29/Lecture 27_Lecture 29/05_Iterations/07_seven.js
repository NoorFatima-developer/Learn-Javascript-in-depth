//=======Map Method in javascript========

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);


//ye kam mai forEach sy b krskti o like this:

newNum = []

myNumbers.forEach( (num) => 
   {
    if (num >= 1) {
        newNum.push(num + 10)
    }
   })
// console.log(newNum);


//Chaining Method===//


const newNu = myNumbers
                .map( (num0) => num0 * 10)  //and mai num0 jo k mera variable hai inko m print b ni krwati ...
                //kea mai 1 or map laga skti o yes zror let see...
                .map( (num1) => num1 + 10)    //ab iss new variable jo k num hai ismai oper waly num ka result oski vaues aygi..
                //kea mai ab filter b lagaskti o? yes ku ni let see...
                .filter( (num1) => num1 >= 50)     

console.log(newNu);

