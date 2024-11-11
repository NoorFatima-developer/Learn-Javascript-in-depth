const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// step 1 create object to change what value i wanna assign..
const result = {
    PI : 3.5
}

// use defineProperty

Object.defineProperty(result, 'PI', {
    writable :  true
} );

// use getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(result, "PI"));
console.log(result.PI);

