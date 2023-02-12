//strings are immutable

let str = "kaibalya";
console.log(str[4]);   //a

console.log("str.length"); //8

str = str.trim(); //removes extra spaces in the start and end of string
//this function gives a new store string so we need to store it in a variable.

str = str.toUpperCase();
str = str.toLowerCase();

let str2 = str.slice(1, 4); // from 1 to 3 index
str = str.slice(2); //from 2 to end index
console.log(str);

//string concatenation
let str1 = "kaibalya";
let str22 = "jena";
let str3 = str1 + " " + str22;
console.log(str3);  //kaibalya jena

//template string(placeholders)
let str4 = "kaibalya";
let age = 19;
let sentence1 = "my name is " + str + " and my age is " + age;
//or we can use this
let sentence2 = `my name is ${str4} and my age is ${age}`;