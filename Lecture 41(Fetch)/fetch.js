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
