//while loop syntax:

// while (condition) {}

i = 0;
while (i <= 10) {
  console.log(`Value of index is ${i}`);
  i = i + 2
}

// Print Array by using while loop...

let myArray = [ 'flash', 'batman', 'superman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value of index is ${myArray[arr]}`);
    arr = arr + 1;
}

//Do-while loop:

let score = 11;
do {
    console.log(`Score is ${score}`);       //Score is 11(ku k condition bdmai check hoti ismai)
    score++;
    
} while (score <=10 )