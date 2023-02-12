//we use var to declare a variable but even if we don’t use var it is considered correct.
"use strict";  //ensures that var is used variable declaration.
var hm = "variable";
console.log(h);

let h = "hello";  //let is better to use than var as it does not allow
//the same function name to be declared again unlike var.
//block scope vs function scope

const pi = 3.14;  //value cannot be changed
//it must be initialiazed and declared compulsorily

//falsy values
//"" empty string
//null
//undefined
//0
let x = "";
let x1;
let x2 = null;
let x3 = 0;
if (x) { } else { }   //so else block would be executed these values are false

//ternary operator
let age = 8;
let drink = (age >= 5) ? "coffee" : "milk";  //outputs coffee

// && (and operator)
// || (or operator)

//only underscore(_) and dollar($) symbol allowed in variable declaration. 

//only underscore(_) and dollar($) symbol allowed in variable declaration. 