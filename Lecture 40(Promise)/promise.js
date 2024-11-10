// promise smjo esa e h k hmsy ye promise krta h k ye hmra kam krdyga but wait krta h k kuch time tk kryga jldi b krskta hai or late b kr skta etc..
// promises ko hum create b krty hain and consume b krty hain but zda tr esi examples hongi jinmai hum log promises ko consume krty hain..

// Example:(Hum promises ko kesy consume krskty hain...)

// then m response ata hai, catch m error ata hai and finally mai sb kuch ata h ku k finally always execute...
// fetch('https://api.com').then().catch().finally()   //essy hum consume krty hain promises ko...

//lkin create krna b tu sikhna hai so see at below:
// promise apny andr callback leta hai blky callback hell(callback hell ka mtlb ye h k callback k andr e callback fer callback)

// NOTE: Basically resolve directly connected hai hmry then k andr...islye tu hum then ko consume krny k bd resolve krty hain setTimeout k andr...

// ==================================Promise Practice 01 Task======================================
//1---Creation Code of promises:(by storing in variable)

const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks
    //DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is completed');
        // jb thk m rsolve wala func run ni krogi tbtk wo resolve ni hoga...and tbtk "Promise comleted screen pr shwow ni hoga"
        //if task is successful

        // 3--Promise reolve
        resolve('Task One Successful');
    }, 2000);
})

// ab aghr meny setTimeout() likh dea h tu promise ka kea kam?
// ab hum yhi discuss krygy k promise ka akhir kea kam h..
// yahan hum sbsy pehly .then use krygy ku k "then" jo h na wo directly link hai hmary resolve k sath

//2--- Consume promise:
promiseOne.then(function(){
    console.log("Promise Consumed");
    
});

// ==================================Promise Practice 02 Task======================================

//1--- Creation Code of promises:(without storing in a variable)

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Passing task 2");
// 3-- Resolved Promise:
        resolve()
    }, 1000);
// 2 --- Consume promise
}).then(function(){
    console.log("Passing 2 resolved");
    
})

// ==================================Promise Practice 03 Task======================================
//1-- Creation of promise(By storing it in a variable and how promise consume data which we pass in resolve) 

const promiseTHree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Passing task 3");
        // 3-- Resolved Promise:
        resolve({username: "Chai", email: "chai@gmail.com"})
    }, 1000)
})

// 2-- Consume promise

// ab ye jo data meny pass kea h na ye apny andr oss obj ko e resolve kryga...
promiseTHree.then(function(data){
    console.log("Passing 3 resolved", data);
})

// ==================================Promise Practice 04 Task======================================

// 1--Create Promise(Use of Reject with resolve, catch, finally..)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        // Hum yahan console.log b krskty hain hum yahan checks b even laga skty hain
        // and then jb hum if else likhgy tu if case resolve klye hoga and else case reject klye b use o ga yahan...
        let error = true;   //isska mtlb ye h k error exist krta hai...
        // 3--Resolve promise
        
        if(!error){
            resolve({username: "noor", password: "123"})
        }
        else{
            reject("An error occurred");
        }
    }, 1000)
})

// 2-- Consume Promise(reolve and reject jahan use krty hain osko consume krny ka different way hota hai)

// pehli chez ye h k jb hum reject use krty hain tu store time hum osko 1 variable m store krk log ni krwaty skty..
// jesy yahan noor h...

// const noor = promiseFour.then(function(user){
//     console.log("Promise 4 resolved", data);
// })
// console.log(noor);   //Error not worked....

// Ab ye dekhygy kesy consume kry hum..(and kesy hum callback hell sy bach skty hain using then and catch...callback hell ye hota hai jismai hmry ps alot of callbacks hoti h)
// chaining of .then....

promiseFour
.then(function(user){                //here i used simple func
    console.log("Promise 4 resolved", user);
    return user.username;
})
.then((username) =>                    //here i used arrow func
    console.log(username))
.catch(function(error)      
    {console.log(error);         

}).finally(() => {
    console.log("Promise is resolved and rejected..");
    
})

// ==================================Promise Practice 05 Task======================================

// 1--Create Promise(Use of Reject with resolve and finally(not handle catch ku k kafi cases m hum db connect krny k bd kehty hain k hmy agy ni brna tb ye kam ata hai..or hmy error handling ni kri prti))
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // 3--Resolve promise
        if(!error){
            resolve({username: "njavascript", password: "123"})
        }
        else{
            reject("An error occurred in JS");
        }
    }, 1000)
})
// 2--Concume Promise:
// Async b tu wait krta h and then kam krta hai(Async blocking in js m e tu ata hai)
// so we can consume it as async as well ku k promise b wait krta hai and thne kam krta hai same essy e async b tu wait krta hai and then kam krta hai


// async directly errors ko handle ni krty so use try catch with async or  i can also use catch here as well.
async function consumepromisefile(){
    // promise hmry ps 1 object h islye hum osko essy consume ni krygy jesy meny below m kea h...
    // await promiseFive()    
    // hum promise ko essy consume krty hain...
    try {
    const response = await promiseFive
    console.log(response);  
    } catch (error){
        console.log("An error occurred in JS");
    }
}

consumepromisefile();

// Use of fetch(): Now do some practical work by using the promise: of async await...

// async function getAllusers(){
//  try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
    
//     // convert this above string into json format.
//     const data = await response.json();
//     console.log(data);

//  } catch (error) {
//     console.log("E: ",error);  
//  }
// }

// getAllusers();

// ======Ab yhi oper wala kam m try catch sy ni krna chahti i want k m .then sy kro tu see below code:

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json();
})
// ab response sy jo data wps ayega oskley hum 1 or then use krygy...

.then((data) => {
    console.log(data);
})
.catch((error) => 
      {return console.log(error)});

// NOTE:
// Ab important bt ye h k try, catch jo h wo hmesha async func k andr e run o ga and .then, catch without async func hi run hoga...
