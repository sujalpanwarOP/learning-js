// Primitive
// ==> Passed by value 
// 7 types ==> String, Number, Boolean, null, undefined, Symbol, BigInt 
 
const score = 100  // return type number
const scoreValue = 100.3 // return type number
const isLoggedIn = false // return type boolean
const outsideTemp = null  // return type object
let userEmail; // return type undefined  


// Symbol make them unique even after having the same value
const id = Symbol('123')  // return type Symbol
const anotherId = Symbol('123') // return type Symbol 

console.log(id === anotherId);

const bigNumber =  12314234123412341243n  //return type  bigint 

// Reference  (Non Primitive )
// ==> Passed by reference 
// Array, Objects, Functions 

const heroes = ["shaktiman", "naagraj", "doga"];  // return type object

let myObj = {   // return type object
    name: "Sujal",
    age: 22
}

const myFunction = function(){     // return type function
    console.log("Hello world");
}

console.log(typeof bigNumber)


// +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "sujalpanwardotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherName)


let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "sujal@google.com"

console.log(user1.email)
console.log(user2.email)
