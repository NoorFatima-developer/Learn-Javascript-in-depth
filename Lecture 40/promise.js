// promise smjo esa e h k hmsy yr promise krta h k ye hmra kam krdyga but wait krta h k kuch time tk kryga jldi b late b p skta etc..
// promises ko hum create b krty hain and consume b krty hain but zda tr esi examples hongi jinmai hum log promises ko consume krty hain..

// Example:(Hum promises ko kesy consume krskty hain...)

// then m response ata hai, catch m error ata hai and finally mai sb kuch ata h ku k finally always execute...
// fetch('https://api.com').then().catch().finally()   //essy hum consume krty hain promises ko...

//lkin creae krna b tu sikhna hai so see at below:
// promise apny andr callback leta hai blky callback hell(callback hell ka mtlb ye h k callback k andr e callback fer callback)

//Creation Code of promises:

const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks
    //DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is completed');
        //if task is successful
        // resolve('Task One Successful');
    }, 2000);
})

// ab aghr meny setTimeout() likh dea h tu promise ka kea kam?
// ab hum yhi discuss krygy k promise ka akhir kea kam h..
// yahan hum sbsy pehly .then use krygy ku k "then" jo h na wo directly link hai hmary resolve k sath

// Consume promise:
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})