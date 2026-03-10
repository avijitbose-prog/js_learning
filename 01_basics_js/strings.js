const name="avijit"
const repo=50;
// console.log(name+" "+repo);
// console.log(`hello my name is ${name}`);
const gameName =new String('avijit-ab-bose')
// console.log(gameName);

// console.log(gameName[0]);//that's how we can acess character in string
// console.log(gameName.__proto__);//this print the object of gameNae



// console.log(gameName.length);//prints length
// console.log(gameName.toUpperCase());//turn all character into upper case
// console.log(gameName.charAt(2));// find the character at specific index
// console.log(gameName.indexOf('t'));//find the index of a given character

// const newString = gameName.substring(0, 4)//it makes a substring of 0 to 4-1 
// console.log(newString);

const anotherString = gameName.slice(0,6)   //this will slice a data of 6 length starting from 0
console.log(anotherString);

// const newStringOne = "   avijit    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //this function remove spaces from start and end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //this replace %20 by '-'

console.log(url.includes('sundar'))
console.log(url.includes('hitesh'))  // checks that the url contains the word or not


console.log(gameName.split('-'));  //split the array by '-' and show the splited elements in an array
