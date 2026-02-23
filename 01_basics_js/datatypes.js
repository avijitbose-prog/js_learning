"use strict";//treat all JS code as newer version
//alert(3+3)//we are using nodejs,not browser in browser this will give alert
console.log(3+3);//this is good
console.log(
    3
    +
    3//this is bad practice redability is reduced
);

console.log("avijt");
let age ="avijit";//string
let number=14;//number 
let isloggedin=true//boolean=> true/false
let state;//udefined
console.log(typeof undefined);//undefined
console.log(typeof null);//null is a objec which means null not empty

const foo=42;
console.log(foo);
//foo=43;//this cant be done because its defined as const
//console.log(foo);
const result =foo+"1";//now result act as a string and here foo will converted to string and add 1 means result will be 421
let ans=foo+1;//now ans act as a number and ans is 43
console.log(ans);




