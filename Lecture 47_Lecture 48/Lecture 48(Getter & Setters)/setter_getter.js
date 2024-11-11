class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // ye oper jo email and password hain ye hmry variables haina tu hum inmai sy kisi pr b getter and setter laga skty hain...
    // behaves like method:

    // get ko hum return krty hain..
    get email() {
        return this._email.toUpperCase();
    }

    // setters ko hum return nahi krty..
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`;
    }

    set password(value) {
        this._password = value.toUpperCase();
}

}

console.log(User);
// Create a new instance of the User class
const noor = new User("noorfatima@gmail", "abc");
console.log(noor.email, noor.password);


