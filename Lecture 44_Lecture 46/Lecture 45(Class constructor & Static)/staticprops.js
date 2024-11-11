class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    // M chahti o jesy hi 1 user bny tu osko 1 unique id mil jye
    // esa hota b hai jb hum user create haina or database m save krty haina, tu mongodb osk sath 1 underscore id attach krdeta hai...

    // Ab hr bar m iss method jo k createID hai iska access oss object ko ni dena chahti jo iss class sy instantiate hoa hai...
    // simply kehskty hain k m iss method ka access iss class k kisi b objec ko ni dena chahti like na logMe ko or na kisi or ko...
    // so i will use "static" keyword in this case...
    static createID(){
        return `123`
    }
}

const user1 = new User("noor");
console.log(user1);
user1.logMe();
// console.log(user1.createID());      //ab ye code error derha hai ku k meny oper iss method k sath static use kea hai..

// So, better smjany klye mai 1 or class use kr ri o k ab m kb static use krogi...


class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const tea = new Teacher("fatima","chai@gmail.com");
console.log(tea);
tea.logMe()
console.log(tea.createID());

// And ye error dega still.....NEXT will see in future...

