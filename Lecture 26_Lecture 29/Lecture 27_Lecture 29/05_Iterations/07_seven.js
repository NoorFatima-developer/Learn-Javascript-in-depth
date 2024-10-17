
//=======Map Method in javascript========

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);


//ye kam mai forEach sy b krskti o like this:

newNum = []

myNumbers.forEach( (num) => 
   {
    if (num >= 1) {
        newNum.push(num + 10)
    }
   })
console.log(newNum);
