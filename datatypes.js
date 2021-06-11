/**
 * JS has important keywords like let, const and var which are used to store variables. 

 * Primitive datatypes: are immutable, compared by its values
      * Numbers, string, boolean, null , undefined.
 * Non-primitive datatypes : are mutable, compared by its references
      * Objects, Arrays, functions.
**/

//Strings and numbers are value types
//Strings of double quotes, single, back tick, template literals.
/**
 * We could access each char in a string by its index.
 * built-in Methods for manipulation : toUpperCase(), substr (startingIndex, numberOf characters to slice off),split, trim, includes, indexof, lastindexof...
**/
console.log('this is a single quote string "Hello !!!"')
console.log("this is a double quote string 'Hello !!!'")

//Storing const values like PI, gravity in const and values that can be changed are stored in let.
let mass= 72
let anyvalue =100.834
const PI =3.14

let word ='Javascript' //this variable containing Javascript would be abandoned when its mutated, which is later removed by garbage collection.
 word = word +'learning'
 console.log(word)

 const personDetails = {
     name:'Jane',
     age:'10'
 }
 
//Now both x and personDetails point to the same reference in the memory.
const x = personDetails;
console.log(personDetails.age)
console.log(x.age)

//Changing/mutating the object with one reference will be implicated in another reference.
x.age = '15'

console.log(personDetails.age)
console.log(x.age)

//Non-primitve types are compared based on its reference and not by its values.
let num =[1,2,3]
let numCopy = num
let nums =[1,2,3]
console.log(num == nums) //false
console.log(num == numCopy) //true

//--> Checking Datatypes and Casting
let boolValue =true
let sampleUndefinedValue
console.log(typeof num)
console.log(typeof oneString)
console.log(typeof PI)
console.log(typeof boolValue)

//----Casting
//string to Int and also float to Int {parseInt}
let num1 = '10'
parseInt(num1)

//string to float 
let grav ='9.81'
parseFloat(grav)
