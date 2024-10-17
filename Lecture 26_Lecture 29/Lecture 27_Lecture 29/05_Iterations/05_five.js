//=====FURTHER DISCUSS ON ARRAYS:======//

const coding = ["js", "css", "jsx", "cssx", "python"]

//yahan jesy e mai forEach use kea hai tu jesa k forEach 1 built-in function hai tu iska mtlb
//wo smjdar tu hoga hi... ab wo kehra callback function tu callback ka mtlb e h function k andr 1 or function islye m 
//isk andr 1 or function banaya hai khudsy ab jesa k wo callback function tu oska koi nam ni hoga halank simple function ka koi na koi nam zror hota hai...
//ab mai function k andr as a parameter koi b nam deskti o tu wo automatically sb inderstand krlyga...
//jesy m yahan val nam rkhlea hai m kuch b nam rkhskti o...

coding.forEach(function (val) {
    // console.log(val);
    
})

//yahan hum simple function ki bjye isko arrow function sy b use krskty hain...
//arrow function ka basic ayntax ye hai:

//coding.forEach(greet = () => {})
//but callback m hmny nam e tu nahi dena.. 
//and as a parameter hum koi v nam deskty hain...

coding.forEach( (item) => {
    // console.log(item);
    
})


//iisitrhan hmry ps printMe function hota hai jo k built-in function hota hai hum osko separate bana k other function k andr oska reference b pass krskty hain tu ye b callback e o ga...
//PrintMe function just print values:
//callback function other way where we just pass reference of one function:
//like this:

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe);    //just pass refrence of function like this(print) not call function like this (printMe())


//Hum khudsy b koi function bana k oska reference other function m pass krskty hain then fer b wo callback e o ga and hum krskty hain zrori ni h k built-in e function o tb e hum osko other function m pass krygy...

//Ab hum forEach loop m bs variable e jo values print kry as a parameter pass ni krskty hum index, b pass krskty hain
//even k aghr hum puri array b print krwana chahty hain tu hum wo b pass krskty hain...

//like this:

coding.forEach((item, index, arr) => {
    console.log(`Index: ${index}, Value: ${item}, arr: ${arr}`);
})



//Array k andr hum bht sary objects use krty hain tu wo hum forEach mai zda tr use krty hain...

//Example:

const myArray = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },

]

//tu isstrhan hum kitni assani sy array k andr bht sary objects m sy kisi b value ko easily access krskty hain...
//abi tu bs 1 value hai lkin aghr bht sari values hongi hum kitni asani sy access krskty hain...
//ye hum database m bht zda use krty hain...jb hmy array m objects m kisi b value ko acces krna o tu..

myArray.forEach( item => {
    console.log(item.languageFileName);
})