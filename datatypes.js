//primitive data types
//string
//number
//boolean
//undefined
//null
//BigInt
//Symbol

let x = 3;
console.log(typeof x);  //prints number

x = x + "";  //to convert number to string
x = String(x);

let str = "45";
str = +str;  //to convert string to number
str = Number(str);

console.log(Number.MAX_SAFE_INTEGER); //outputs max number that can be stored 
//if want to store greater than that then use BigInt.

//undefined
let h2;
console.log(typeof h2); //outputs undefined

//null
let h = null; //means nothing
console.log(typeof null); //prints object which a bug in javascript

//BigInt
//operation cannot be performed with other data types. only in same.
let num3 = BigInt(121);  //declaration
console.log(num); //prints 121n
let num = 121n;    //declaration

// == vs === vs != vs !==
let num1 = "7";
let num2 = 7;
console.log(num1 == num2);  //print true
console.log(num1 === num2);  //print false 
// === also checks datatype other value.
// != does not check type only value
// !== checks type and value