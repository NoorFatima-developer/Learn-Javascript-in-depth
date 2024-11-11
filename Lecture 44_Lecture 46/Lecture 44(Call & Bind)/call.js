// ye username smjo US m define hoa hai
function SetUsername(username) {
    // DB Complex calls
    this.username = username;
    console.log("Called");
    
}

// email and password pakistan m define hoey hain
function createUser(username, email, password) {

    SetUsername.call(username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);
