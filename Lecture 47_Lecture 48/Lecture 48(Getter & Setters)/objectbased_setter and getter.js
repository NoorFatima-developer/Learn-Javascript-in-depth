const User = {

    // underscore(_) basically btata hai k m 1 private property use kr rha ho jo k normal users k use m nahi ayegi...
    
    _email: 'chai@gmail.com',
    _password: 'abc',

    // Ab mai nahi chahti meri email or password hr koi acces krly tu osklye i will use my getters and setters:

    // getters and setter memory sy data lany or lejany ka kam kr rye hain...
    get email(){
        return this._email.toUpperCase();
    },
    
    // mery lye email 1 method hai propert ni hai..

    set email(value){
        this._email = value;
    }
}

// jesy hum new instance use krty haina wesy e hum factory functions b use krksty hain like 
// "Object.create() ye 1 factory function hai..
// Meny bht sara kam new sy kea h ab m isko factory function sy krogi...

// let tea = Object.create() //by default isk andr null hai
// Lkin m isko kahogi k user ki based pr values ko define kro so i will do this:
let tea = Object.create(User)
console.log(tea.email);
