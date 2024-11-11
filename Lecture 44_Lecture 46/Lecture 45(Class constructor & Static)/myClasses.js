// Class Constructor and Static:
// Ye sari kahani hai after ES6 k....
// Javascript m classes ka itni concept ni hota ku k whi sara kam hum prototypes sy krlety hain...
// Lkin fer v we discuss kahani after ES6...

// ==========Create Classes in Jvascript Example:===========

// Modern use classes as well...
// Do this work by class..
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Matlab m aghr ko b email password wagaira ko change krna chahti o ya kuch extra add tu osklye m new func bana k osmai add krogi...
    // Mai password ko encrypt krk dena chahti hon direct essy nahi dena chahti islye i will do this:

    encryptPassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai);

console.log(chai.encryptPassword());
console.log(chai.changeusername());


// Do above work by function..

// Behind the scene kea kam horha hai discuss krlety hain wo b...
// User basically hai tu function lki behind the scene ye "object ki trhan hi tu behave krta hai..."

function User1(username,email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword1 = function(){
    return `${this.password}abc`
}
User1.prototype.changeusername1 = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User1("tea", "tea@gmail.com", "123");
console.log(tea);

console.log(tea.encryptPassword1());
console.log(tea.changeusername1());


