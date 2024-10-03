//Trying to merge two arrays but it takes second array as a data of dingle index
//By push:(not better)
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

console.log(marvel_heros);
console.log(dc_heros);


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);      //It takes second array as a data as we can pass anything to array...
//output =
// 'thor',
// 'Ironman',
// 'spiderman',
// [ 'superman', 'flash', 'batman' ],
// 'superman',
// 'flash',
// 'batman'
// ]
// console.log(marvel_heros[3][1]);    //output = flash

//by concat:(not better)
// let allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);    
//output =
// 'thor',
// 'Ironman',
// 'spiderman',
// [ 'superman', 'flash', 'batman' ],
// 'superman',
// 'flash',
// 'batman'
// ]

//By spread operator:(usable and best)

//What is spread??
//Spread smjo k 1 glass pani sy brha hoa hai or wo full brha hoa hai or meny osko nichy gira dea hao tu pani ka glass zameen pr spread hojeyga...


//Example of Spread Operator is:

const all_new_heros = [...marvel_heros, ...dc_heros];  // //ab smjo k sb marvel or dc 2 glass hain pani k or wo spread o k aleda aleda o gye hain...

console.log(all_new_heros);

//flat()

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//Array Methods(isArray, from, of)
console.log(Array.isArray("Noor"))
console.log(Array.from("Fatima"));
console.log(Array.from({name: "Noor"}))     //not directly converting object that's why giving empty array like this []...

//of Method:

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));
