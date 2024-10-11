//Immediately Invoked Function Expressions (IIFE)


//1--way:

// function chai() {
//     console.log(`DB Connected`);
    
// }

// chai()

//2--way:(named IIFE )

(function chai() {
    console.log(`DB Connected`);
})();       //for termination here must ;...itherwise gives error:



//3--way:(it same works for arrow func as well.)

( () => {
    console.log(`DB Connected`);
})();       //for termination here must ;...Otherwise gives error:




//4--way:(If I wanna pass parameters in this then can do this:)(unmaed IIFE)(also i can pass parameters as well)

( (name) => {
    console.log(`DB Connected ${name}`);
})('nor');   



//Important NOTE:
//Basically () --> function definition jahan likhty nd () --> function execution
//why use this:
//Global scope k pollution sy probelm hoti hai tu global scope k variables ya jo b declaration hai osko hatany klye hum log ye use ktty hain....

//3--way: