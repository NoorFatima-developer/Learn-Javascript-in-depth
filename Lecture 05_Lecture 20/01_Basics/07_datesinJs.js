//============== Dates===

let myDate = new Date()

console.log(myDate);                        //cannot good or understandable
console.log(myDate.toString())              //readable
console.log(myDate.toDateString())          //readable
console.log(myDate.toLocaleString())    //readable
console.log(typeof myDate);                 //object


//==========use toDateString:
//If I want to create myDate instead of current date:
let myCreatedDate = new Date(2025, 0, 23)        //2025, 0, 23(month starts from 0 in js)
console.log(myCreatedDate.toDateString())        //readable;

//=========use toLocaleString:
//If I want to create myDate instead of current date with hour and minutes etc..
let myCreatedDate1 = new Date(2025, 0, 23, 5, 4, 2)        //2025, 0, 23, 5, 4, 2(month starts from 0 in js)
console.log(myCreatedDate1.toLocaleString())        //readable;


//Also use this in string like this:
//If I want to create myDate instead of current date with hour and minutes etc..
//MM-DD-YY
let myCreatedDate2 = new Date("01-14-2023")        //2025, 0, 23, 5, 4, 2(month starts from 0 in js)
console.log(myCreatedDate2.toLocaleString())        //readable;

//==========use Timestamp:
//TimeStamp(used when we are making quizes or polls etc in js.)

let myTimeStamp = Date.now()

//convert time stamp to miliseconds
console.log(myTimeStamp);                        //timestamp in milliseconds
console.log(myCreatedDate.getTime());            //this is the timeStamp of myCreatedDate which is above:
//convert time stamp to seconds:

console.log(Date.now()/1000);                   //1727963892.724(give result in points so i will never use it)

//I will use Math.floor:
console.log(Math.floor(Date.now()/1000));         //1727963892

////====getMonth, getDay=========

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);    //get exactly value so used +1..
console.log(newDate.getDay() );

//And if use date with text then can write in this form:
console.log(
`${newDate.getDay()}(and the time is)}`)

//======NOTE::========//
//tolocaleString is an object and we can define alot of parameters in this so very interesting...

//In weekdays today is thursday....
console.log(newDate.toLocaleString('default', {
    weekday : "long",
   
}))