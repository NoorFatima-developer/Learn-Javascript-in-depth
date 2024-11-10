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

