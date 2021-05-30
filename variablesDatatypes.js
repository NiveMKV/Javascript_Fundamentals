/**
 * Js has important keywords like let, const and var which are used to store variables.
 */
// Only let and const have block scope.

/**
 * Primitive datatypes: are immutable, compared by its values
 * Numbers, string, boolean, null , undefined
 * Non-prim : are mutable, compared by its references
 * Objects, Arrays, functions
*/
let word ='Javascript'
 word = word +'learning'
 console.log(word)

 const personDetails = {
     name:'Jane',
     age:'10'
 }
const x = personDetails;
console.log(personDetails.age)
console.log(x.age)

x.age = '15'

console.log(personDetails.age)
console.log(x.age)

//--Strings and numbers are value types
//Strings of double quotes, single, back tick, template literals.
/**
 * We could access each char in a string by its index.
 * Methods: toUpperCase(), substr (startingIndex, numberOf characters to slice off),split
 * trim, includes, indexof, lastindexof, 
 */
console.log('this is a single quote string "Hello !!!"')
console.log("this is a double quote string 'Hello !!!'")
let oneString =12
let anotherString =12
console.log(oneString == anotherString)

let num =[1,2,3]
let numCopy = num
let nums =[1,2,3]
console.log(num == nums)
console.log(num == numCopy)

let mass= 72
let anyvalue =100.834
const PI =3.14

//-- Checking Datatypes and Casting
let boolValue =true
let sampleUndefinedValue
console.log(typeof num)
console.log(typeof oneString)
console.log(typeof PI)
console.log(typeof boolValue)

//---------Casting
//string to Int and also float to Int {parseInt}
let num1 = '10'
parseInt(num1)

//string to float 
let grav ='9.81'
parseFloat(grav)




