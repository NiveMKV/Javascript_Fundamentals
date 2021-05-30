//Creation of arrays.can even store array in a array.
const arr =[];
const arrayWithValues =["India","America","London"]
const arraywithMixedDatatypes =[
                        'Indium',
                        250,
                        true,
                        {"place":"India","Location":"Chennai"},
                        {skills :['HTML','CSS','JS']}, //object
                        [1,2,3,'4']
]
console.log(arraywithMixedDatatypes)
/**
 * To create an char array use split method of string.
 */
let stringVariable ='Javascript';
let charArray = stringVariable.split('');
// console.log(charArray);

/**
 * Access array using  Index
 */
// console.log(charArray[2]);

/**
 * Modifying the array elements.
 */
charArray[2]='v';
// console.log(charArray[2]);
// console.log(charArray);

/**
 * Methods to manipulate array.
 * length, concat, indexOf, slice, splice, join, toString, includes, reverse, 
 * lastIndexOf, isArray, fill, push, pop, shift, unshift
 */
//  console.log(charArray.length);

 const firstArray =[1,2,3]
 const secondArray =['a','b',3]
const thirdArray = firstArray.concat(secondArray);
// console.log(thirdArray);

let index = thirdArray.indexOf('c');
// console.log(index);

let lastIndex = thirdArray.lastIndexOf(3);
// console.log(lastIndex);

if(index != -1){
    console.log('"c" does exist in the array')  
} else {
    console.log('"c" does not exist in the array')
}

//To check if element exists and to check if its an array.
// console.log(thirdArray.includes('A'));
// console.log(Array.isArray(lastIndex));

//Convert to string.
console.log(thirdArray.toString())

//Join yeilds string and joins array based on parameter supplied.
console.log(thirdArray.join(""));

//Slice. a part of original array.
const slicedArray = thirdArray.slice(3,5);
console.log(slicedArray);

//Splice (can add also remove)
//remove:
thirdArray.splice(5,1,'c');
console.log(thirdArray);

//add:
console.log(thirdArray)
thirdArray.splice(5,0,'X','Y')
console.log(thirdArray);

//to add an element usinf push.
firstArray.push('4');
console.log(firstArray);

//pop
firstArray.pop('4')
console.log(firstArray);

//Sort and reverse.
const ascSortArray = [1,2,3,4,5]
console.log(ascSortArray.sort())
console.log(ascSortArray.reverse())

const plz = [3.85,100,40, 25]
console.log(plz.sort())
















