/**
 * A function can be declared/created in many ways.
 * A function may or may not return a value
 */
//Declaration function.
function squareRoot(number)
{
    console.log(number*number)
}

squareRoot(2)

function printFullName(firstName, lastName){
    //return fullName = firstName+' '+lastName
    return `My fullname here follows ${firstName} ${lastName}`
}
console.log( printFullName('Max','Hellen'))

//Arrow functions:  () =>

const squareValue = (n) =>{
        return n*n
}
console.log(squareValue(8))

const square = (n) => n*n
console.log(square(10))

//Anonymous function: Can be used as a callback functions;
//Callback functions are funtions that used as a parameter to another function.
const noNameFunction = function (){
    console.log("I am an anonymous function!!.")
    //return Math.PI
}
noNameFunction()//Expression function 

//Self invoking functions:
 (function sumOfTwo(numberOne, numberTwo){
    console.log(numberOne+numberTwo)
 })(3,2)

 (function(x,y,n) {
    console.log(n+n+n)
  })(2,3,4)

//-----------------------------------------------------------------

/**Some other functions:
  function take other function as a parameter like a callback function.
  Will use setTimeout for example.
*/
  
function callBackFunc(){
    console.log("I will be executed after waiting for 5 secs.!!!")
} 
setTimeout(callBackFunc, 5000)

/**
 *  setTimeout allows us to run a function once after the specified interval of time.
 *  setInterval allows us to run a function repeatedly, starting after the given interval of time then repeating continuously at regular interval. 
 **/

function aCallBackFunc(){
      let date = new Date();
      console.log(date.toLocaleTimeString())
}  

function clearIntervalFunc(){
    clearInterval(setIntervalID)
}

const setIntervalID =  setInterval(aCallBackFunc,1000)

setTimeout(clearIntervalFunc, 20000);

