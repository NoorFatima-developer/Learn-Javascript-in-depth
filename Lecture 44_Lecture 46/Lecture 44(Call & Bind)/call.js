// ye username smjo US m define hoa hai

function SetUsername(username) {
    // DB Complex calls
    this.username = username;
    console.log("Called");
    
}

// email and password pakistan m define hoey hain
// ab m US waly ko pakistan m define krna chahti hon..
function createUser(username, email, password) {

    // ====Call ki kahani?===(In simple words, this apna current execution context kisi aur function ko pass krdeta hai...)
    // US ka this basically apna current execution context Pakistan k function ko pass kerrha hai..ye hai call
    // jismai 1 func apna this dosry function ko dedey k me iss chor rha ho ab tm snbalo...

    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);
