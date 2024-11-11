class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

console.log(User);

// Create a new instance of the User class

const noor = new User("noorfatima@gmail", "123");
console.log(noor.email, noor.password);


