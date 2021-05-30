/**
 * Assignment =
 * Arithmetic {+ - * / %}
 * Comparison operator 
 * ==/=== , !=/!==, 
 */
//  console.log(3 != 2)             // true, because 3 is not equal to 2
//  console.log(3 == '3')           // true, compare only value
//  console.log(3 === '3')          // false, compare both value and data type
//  console.log(3 !== '3')          // true, compare both value and data type
//  console.log(3 != 3)             // false, compare only value
//  console.log(3 !== 3)            // false, compare both value and data type
//  console.log(0 == false)         // true, equivalent
//  console.log(0 === false)        // false, not exactly the same
//  console.log(0 == '')            // true, equivalent
//  console.log(0 == ' ')           // true, equivalent
//  console.log(0 === '')           // false, not exactly the same
//  console.log(1 == true)          // true, equivalent
//  console.log(1 === true)         // false, not exactly the same
//  console.log(undefined == null)  // true
//  console.log(undefined === null) // false

 /**
  * Truthy values

    All numbers(positive and negative) are truthy except zero
    All strings are truthy

 * Falsy values

    0, null,  undefined,  NaN,  '', "", ``, empty string

  */

    //console.log( 1 < 2 || 3 < 4 )
    
    //Pre-increment
    let count = 0
console.log(++count)        // 1
console.log(count)          // 1
 //console.log((count++) + 2);
    //Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)
 