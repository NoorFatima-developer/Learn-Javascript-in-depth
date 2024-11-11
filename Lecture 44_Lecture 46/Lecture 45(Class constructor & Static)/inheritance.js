class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);     
    }
}

// Ab aghr kbi hum e-commerce banarye hain ya koi lms bana rye hain tu hmy iss user ko kbi
// admin banana hoga, kbi iss user ko teacher banan o ga ya student banana o ga tu phr osklye
// hum extend krygy...

class Teacher extends User{
    constructor(username, email, password){
        // ab yahan m call use krti thie lkin call tu function m use hota hai or ye classes hain tu osklye m "super" use krogi...
        // ab ye khud e US m jyega or oska data pakistan m krlyga..use of "super"
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "admin@gmail.com", "123");
console.log(chai);
console.log(chai.email)
console.log(chai.username)
console.log(chai.password)
// aghr m ye wala run krna chahti o jo below h tu fer oper sy log hatana pryga pr wahan return likhna pryga...
// and ye undefined islye aya k m addcourse m b log likha hai or yahan pr b tu yahan sy hata deti o fer m
// console.log(chai.addCourse());
chai.addCourse();

const masalachai = new User("masalachai")
masalachai.logMe()
// Teacher store j chai m tu meny teacher ko user sy extends kea h tu logMe ka access teacher yani chai k ps b o ga..
chai.logMe();


