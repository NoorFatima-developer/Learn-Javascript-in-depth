// Modern Method tha basically ye property(mnz functions) k through kesy hum getters or setters lety thy...
// But we prefer class ,ethod:

function User(email, password){
    this._email = email;
    this._password = password;

    // class k andr tu hum constructors mai hi getters or setters ko define krdety hain
    // lkin function mai hmy Object k andr krna prta hai..
    // yad haina function k hmry ps 2 behaviour hoty hain
    // 1--function apny andr function b hai
    // 2--function object b hai

    // So, I will do this:

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(newEmail){

            // validation kiya hai ky email sy chal rha hai or not
            if(newEmail.includes("@") && newEmail.includes(".")){
                this._email = newEmail;
            } else {
                throw new Error("Invalid Email");
            }
        }
    })

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },

        set: function(newPassword){
                this._password = newPassword;
            } 
        })

}


const chai = new User("chai@gmail.com", "abc")
console.log(chai);
console.log(chai.email);
console.log(chai.password);

