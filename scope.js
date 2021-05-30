
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10 (global variables are accessible inside func)
  let c = 30
  if (true) {
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c) // c can be accessed as its parent scope of if block
  }
  console.log(a, b, c) // d can't be accessed reference err is thrown.
}
letsLearnScope()
console.log(a, b)  


function letsLearnScope() {
  var gravity = 10
  console.log(gravity)
}
//letsLearnScope();
//console.log(gravity); //Variables var,let,const declared inside func can't be accessed outside.
if (true){
  var speed = 9
  console.log(speed) 
}
console.log(speed) //Its possible for var but not for let and const.

for(var i = 0; i < 2; i++){
  console.log(i) // 0,1
}
console.log(i)// by the time it comes out of the loop i's value is 2.


/**
 * A variable declared with var only scoped to function but 
 * variable declared with let or const is block scope(function block, if block, loop etc). 
 * Block in JavaScript is a code in between two curly brackets ({}).
 * 
 * Its always adviceable to let and const
 * The scope let and const is the same. The difference is only reassigning. 
 * We can not change or reassign the value of const variable.
 */
//It executes codes asynchronously

