/**
 * Js provided lots of built-ins methods map, filter, reduce, find, every, some, and sort.
 */

/*map  used to iterate array elements and modify the original array
It takes a callback function with elements, index , array parameter and return a new array.*/

const mapArray =[1,2,3,4,5] 
const modifiedMapArray = mapArray.map((elements,index,originalArray) =>{
    return elements*elements
})
console.log(modifiedMapArray)

/**
 * Filter -filter out items that fulfill conditions and
 * Return a new array.
 */
const filterArray =['Scotland','Norway','Finland','Europe','Nagaland']
const modifiedFilterArray = filterArray.filter((x)=>x.endsWith('land'))
console.log(modifiedFilterArray)

/**
 * every - checks if all the elements in one aspect and return true. 
 * some - checks if some of the elements are similar in one aspect and return boolean.
 */
const everyArray=['Ajay','Akila','Apoorva','Akil']
let result= everyArray.every(x => typeof x === 'string')
console.log(result)

/**
 * Sort expects compare function which return 0,1,-1 to sort the numbers.
 * sort function sorts the values as string hence 25 is greater than 100
 * if (25-100) =-75 and hence 25 is now treated as lower value than 100
 */
const sortNumbersArray =[9.81, 3.14, 100, 37]

console.log(sortNumbersArray)
sortNumbersArray.sort(function(a,b){
    return a-b//sorts in asc order
})
console.log(sortNumbersArray)

sortNumbersArray.sort(function(a,b){
    return b-a//sorts in desc order
})
console.log(sortNumbersArray)


