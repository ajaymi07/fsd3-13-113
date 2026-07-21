// 1. Function Declaration
// This is the traditional way to define a standard, named function. It benefits from hoisting, meaning you can call it before it appears in the code file
function sayHello(name){
    console.log(`Welcome to ${name}`);
}

sayHello("Akshat Kumar");

function sum(a,b){
    return a+b;
}

console.log(sum(2,3));

// 2. Function Expression:
// Created by defining a function inside an expression and assigning it to a variable. These are not hoisted.
const subtract = function(a,b){
    return a - b;
}

console.log(subtract(8,4));

// 3. Arrow Function:
// Introduced in modern JavaScript, this provides a compact syntax using the => symbol. It does not have its own binding to the this keyword.
const divide = (a,b) => a/b;
console.log(divide(10,5));

(function(a,b){
    return a+b;
})(2,3);


 
