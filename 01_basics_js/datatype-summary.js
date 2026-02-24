//  Primitive
//in primitive the stack memory is used means it will pass by value menas creat a copy and the main memory is untouched
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//symbol used for unique key

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
//in non primitive type the heap memory is used means it pass by reference so that f we change the main memory will affected
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];//this is array
let myObj = {
    name: "hitesh",
    age: 22,//this is object
}

const myFunction = function(){
    console.log("Hello world");//this is fuction
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3