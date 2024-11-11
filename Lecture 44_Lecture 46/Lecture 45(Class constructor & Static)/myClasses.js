// Class Constructor and Static:
// Ye sari kahani hai after ES6 k....
// Javascript m classes ka itni concept ni hota ku k whi sara kam hum prototypes sy krlety hain...
// Lkin fer v we discuss kahani after ES6...

// ==========Create Classes in Jvascript Example:===========

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const chai = new User("chai", "chai@gmail.com");
console.log(chai);
