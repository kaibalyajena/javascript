//let arr = [];  //multiple datatypes in one

//it is a reference type it is an object in typeof.
console.log(typeof arr);  //object

//to check array
console.log(Array.isArray(arr)); //true

//push  
arr.push("ele");   //adds in the last index

//pop
arr.pop(); //removes last element and also returns it
//let x = arr.pop(); //x stores last element and also remove it

//unshift
arr.unshift("ele"); //adds element in the starting

//shift
arr.shift(); //removes the first element
let x = arr.shift(); //x stores first element and also remove it

//push and pop are faster than shift and unshift

//concatenation
arr = arr.concat([1, 2, 3]);

//cloning an array (diff location in heap memory)
//let arr2 = arr1.slice(0);
//or
//let arr2 = [].concat(arr1);
//or by using spread operator
//let arr2 = [...arr1];

//for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr); //we can also directly print array.

//constant array
//const arr = [1, 2, 3];
arr.push(4);//this will not give error and happen as we are not changing address
arr = [1, 2]; //this will give errror as we changing the address which is constant

//for of loop
//const arr = [1, 2, 3];
for (let i of arr) {   //access elements
    console.log(i);
}

//for in loop
//const arr = [1, 2, 3];
for (let i in arr) {    // access index
    console.log(arr[i]);
}

//array destructuring

//const arr = [1, 2, 3, 4];
//let [var1, var2] = arr; //the will store the values
console.log("this is var1", var1); //1
console.log("this is var2", var2); //2

//let [var1, , var2] = arr; //skips index in between
console.log("this is var1", var1); //1
console.log("this is var2", var2); //3

let [var1, var2, ...newarr] = arr;
console.log("this is var1", var1); //1
console.log("this is var2", var2); //2
console.log(newarr); //3,4   rest all elements in this newarr


//another array of certain elements
let arr1 = [1, 2, 3, 4];
let arr2 = arr1.slice(2);
console.log(arr2); //3,4


//ITERABLES
//in which we can iterate through loops
//array and strings(we can put for or loop which will take each char of string)
//object not iterable

//ARRAY LIKE OBJECTS
//those who have length property and can be accessed with index.