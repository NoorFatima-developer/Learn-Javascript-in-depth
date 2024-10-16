// Basic syntax of switch statement is as follows:

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

// For example mery ps 12 months hain or m onko if else staments sy check krskti o but ismai bht zda time lgy ga tu oss case m hum switch use krskty hain jahan hmy bht e zda if else use krny ki zrort pry tu hmy switch use krlena chye,,,

//Switch ki example smjo k 1 bht sary lock hain or sirf 1 key hai ab jis lock ko key lg jygi oss specific code ko execute krdaingy...
//Switch ki 1 or example jesy ratings 1 sy 5 tk krni hai tu kea 5 times br br if else lgye gy hum?? so better hai k hum switch use krly iss case m b...
//Example 01:(num case)
//Output of example 01 is march:

const month = 3
switch (month) {

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;      //aghr m break ni lgaogi tu jahan ye match kryga oss sy nichy wali sari statements ko b watrerfall ki trhan print krdyga with default...
    case 4:
        console.log("April");
        break;
    
//aghr luch match ni hoga tu default execute o ga
    default:
        break;
}

// Example 02:(string case)
//output of example 02 is Today is Monday

const day = "Monday"
switch (day) {

    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;      //aghr m break ni lgaogi tu jahan ye match kryga oss sy nichy wali statement ko b print krdyga except default
    case "Thursday":
        console.log("Today is Thursday");
        break;
}
