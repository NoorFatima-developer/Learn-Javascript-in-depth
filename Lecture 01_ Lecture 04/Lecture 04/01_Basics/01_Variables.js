const accountId = 11111
let accountEmail = "nf99noorfatima@gmail.com"
var accountPassword = "12345"
let accountState; // without initializing its value will be undefined...
// (without variable we can declare but its not a good way)
accountCity = "Jaipur" 





// accountId = 2 (Not allowed without const)
accountEmail = "hc@hc.com"
accountPassword = "212356444"
// (without variable we can redeclare but its not a good way)
// accountCity = "Bengaluru" 



console.log(accountId, accountEmail, accountPassword, accountCity, accountState);
//If I want to print data in table form then I can use it like this:
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
NOTE:
1--Prefer not to use var because of issue in block scope and functional scope....(instead of var use let(changeable) and const(cannot changed))
2--Also, const must be used with variable and without const keyword we cannot declare a variable....
3-- And let & var can be declared without let and var keyword...
4-- const cannot be redeclared... and var can be redeclared... 
*/