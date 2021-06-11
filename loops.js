/**
 * for of loop used to iterate arrays, keys of an object.
 * for , while, do while same as other pg.lang
 */
const forOfExample =[1,2,3,4,5]
const countries =['India','America','London']

for (let iterator of forOfExample) {
    console.log(iterator)
}

const forOfArrayObject =[
    {name:"Henry",score:85},
    {name:"Mark",score:40},
    {name:"Jane",score:50},
] 

for(let user of forOfArrayObject){
        if(user.score>=50){
            console.log(user.name)
        }
}

//forEach are used only for arrays.
const arraySample = ["chennai",'Banglore','Mumbai','Hyderabad']
arraySample.forEach(function(eachItem, index, arraySample){
    console.log(eachItem)
    console.log(index)
    console.log(arraySample)
})

//forIn loop.
let forInSample = {
   name:'Helen',
   country : 'India'
   
}
for (const iterator in forInSample) {
    console.log(iterator)
}

//Conventional for loop.
for (let i=0; i<countries.length; i++){
    console.log(countries[i])
}

