// const myArr = []
// v8-debugging tool hmny use kea h jiski waja sy ye %  array ki behind the scene sari information dega or wo b without error
// but yahan vs code m nahi chlyga......
// %DebugPrint(myArr)

// Types of array:)Major..
// There are two types of array:
// Continuous and Holey(means holes) array

// Ab continous vs holey k andr Javascript  ki Optimization b 3 trhan sy hota hai...

// SMI (small integer)
// packed element
// Double(float, string, functions etc ismai hoskty hain)

// And one more thing array k andr properties nahi blky elements hoty hain..
// so bolty wqt dehan krhna hai k array k adnr elements hoty hain..

// Ab array hai tu hum methods tu use krygy hi like..
// map, for-each etc...
// and hr 1 ki optimization different hai..


// PACKED_SMI_ELEMENTS(sbsy zda optimized hain lkin ismai hum bs numbers leskty hain no integers no strings etc...)

const arrTwo = [1, 2, 3, 4, 5]

// PACKED_DOUBLE_ELEMENTS

arrTwo.push(6.0)

// PACKED_ELEMENTS

arrTwo.push('7')

// HOLEY_ELEMENTS

arrTwo[10] = 11

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// Aghr hole hai tu ye sari checkings lgygi
//because holes are very expensive:
// jb m above code ko run kea tu ye undefined or empty items ny mery code ko khrab kea like this;
// islye recommend kea jta hai k hmyr array k andr holes ni hony chye..
// [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// 11
// undefined

///SO,,,,,,,,,,,,,,
// bound check(aghr tu boundcheck hai tu fer hum below 3 steps krygy ni tu koi zrort e ni..)
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


// Example 02:

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);       //outof bound ni h 2 index pr hum array ko access krksty hain islye undefined ayega e ni so no need to above checks..

// Highest to lowest optmizatiob:

// Ye sary optimized hain...(ku k ye continous waly hain)
// SMI > DOUBLE > PACKED

// Ye holes waly hain...
//  H_SMI > H_DOUBLE > H_PACKED

// Holey Elemets example:(not better approach because of holes)

const arrfour = new Array(3)
// just 3 holes. HOLES_SMI_ELEMENTS
arrfour[0] = '1' //HOLEY_ELEMENTS
arrfour[1] = '2' //HOLEY_ELEMENTS
arrfour[2] = '3' //HOLEY_ELEMENTS

// WIthout hole and Packed Elements:(better apparoach)

arrFive = [];

arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS
arrFive.push('4') //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

// Ye double bn gya(lkin avoid kryega ku k double sy back SMI mai ana possible ni hota..)
arrSix.push(Infinity)
arrSix.push(NAN)


// SUMMARY :

// SUmmary yehi h k holes vs continous m sy hmy yehi apparoch honi chye k holes na bny or jitna continous
// hoskta utana e better hai..and ismai sequence hota hai SMI , THEN DOUBLES , THEN PACKED..
// 1 dfa hum smi sy agy chly gye tu wps ana possible ni ..
// that's it in this lecture...

// And one more thing k hum apny methods create krny ki bjye jo alreaduy existing methods haina..
// jesy for, for-of, forEach wagaiara...

// Summary:
// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.
// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.
// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.
// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.