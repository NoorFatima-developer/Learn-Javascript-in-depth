# Javascript & Classes...

## Object Oriented Programming(OOP) => Isk simple sa matlab ye h k code likhny ka style...Procedural b hoskta hai structural b hoskta hai etc...

## Object
-collection of properties(mnz constants and variables) and methods(means functions)...
Example:
-toLowerCase, toUpperCase, promises etc.. all are objects in Javascript...

## Why use OOP in JavaScript?

Basically hmara code buht e zda mess-up horha tha k koi b chunk si sy use nahi horha tha..spegeti code kehskty hain...

<!-- Javascrip ka 1 bht acha feature hai Services krk osmai hum log ye use krskty hain but in projects we will discuss further details of it... -->

## Parts/Components of OOP

1--Object literals => {isk andr hmry ps properties and methods hoty hain...}..mnz two.

Example of Object Literals is:

// Example of Object Literals is as follows:

// property ka use ye h k meny const ka use kea hai and method ks
// mtlb ye h k meny function ka use kea hai...

const user = {
    username: "noor",
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database..."); 
    }
}

console.log(user.username);
console.log(user.getUserDetails());

----------------------------------------------------------
- i-Constructor function
- ii-Prototypes(Proto, Prototypes)
- iii-Classes
- iv-Instances (new, this)

## 4 Pillars of OOP:

- Abstraction(Hide details klye use krt hain.. Example fetch())
- Encapsulation(Wrap-up the data(mnz jo hum data visible krwana chah rye hain osko hum visible krwa
  skty hain and jo hum hatana chah rye hain osko hum hata skty hain by using Encapsulation))
- Inheritance
- Polymorphism(Poly means bht sary, morphism means Methods. (simply say bht sary roop.))
  Example: console.log wagaira essy bht sary kam krdeta hai...


## This Keyword Game;

// This keyword simply ye hota hai k hmy current context ko specify krna prta hai
// Simple c example ye h k jesy kal monday h mext week mond h ab m kis mon ki bt kr ri o tu mjhy specify krna pryega k m kiski bt kr ri o
// tu basicalyy this keyword specify e krta h or osklye e use hota hai....
// Example:
// let arr = [1, 2, 3]
// console.log(arr)   
// ab m array m jo b loop lagaogi m osko specfic krny klye btana pryga k m kis index ko access krna chah ri o...  
// NOTE:(this keyword specify current context...)