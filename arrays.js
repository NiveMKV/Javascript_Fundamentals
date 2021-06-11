//Creation of empty array and arrays with values. Can even store array in a array.
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
console.log(charArray);

/**
 * Accessing arrays using its Index.
 */
console.log(charArray[2]);

/**
 * Modifying the array elements using its Index.
 */
charArray[2]='v';
 console.log(charArray[2]);
 console.log(charArray);

/**
 * Methods to manipulate array.
 * length, concat, indexOf, slice, splice, join, toString, includes, reverse, 
 * lastIndexOf, isArray, fill, push, pop, shift, unshift
 */
 console.log(charArray.length);

//Join two arrays using Concat method.
 const firstArray =[1,2,3]
 const secondArray =['a','b',3]
const thirdArray = firstArray.concat(secondArray);
 console.log(thirdArray);

//Find Index of an element present in an array.
let index = thirdArray.indexOf('c');
console.log(index);

let lastIndex = thirdArray.lastIndexOf(3);
console.log(lastIndex);

if(index != -1){
    console.log('"c" does exist in the array')  
} else {
    console.log('"c" does not exist in the array')
}

//To check if an element exists and to check if its an array.
console.log(thirdArray.includes('A'));
console.log(Array.isArray(lastIndex));

//Convert to string.
console.log(thirdArray.toString())

//Join yeilds string in return and joins array based on delimiter supplied.
console.log(thirdArray.join(""));

//Slice. a part of original array and return sliced array. It won't modify the original array.
const slicedArray = thirdArray.slice(3,5);
console.log(slicedArray);

//Splice (can Add also Remove elements based on the parameters supplied.)
//remove an element using Splice:
thirdArray.splice(5,1,'c');
console.log(thirdArray);

//add an element using Splice:
console.log(thirdArray)
thirdArray.splice(5,0,'X','Y')
console.log(thirdArray);

//push :to add an element at the last Index.
firstArray.push('4');
console.log(firstArray);

//pop :to remove an element at the first Index.
firstArray.pop('4')
console.log(firstArray);

//Sort and reverse.
//The aforementioned functions work perfectly with strings. For numbers with float values, have to use comparefunction in the constructor.
const ascSortArray = [1,2,3,4,5]
console.log(ascSortArray.sort())
console.log(ascSortArray.reverse())


















