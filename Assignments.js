

// // let str2 = 'facebook,aPPle,IBM'
// // let strSplit = str2.toLowerCase().split(',')
// // let finalStr = " "
 
// //  for (let iterator of strSplit) {
// //      let firstLetter = iterator[0].toUpperCase()
// //      tempArray = iterator.split('')
// //      tempArray.splice(0,1,firstLetter)
// //      finalStr += tempArray.toString() + " ";
// //  }
// //  let searchfor = /,/g
// //  let replaceWith =""
// //  let crrctStr = finalStr.replace(searchfor,replaceWith)
// //  console.log(crrctStr)

// // // // let lowerstr = splitedArr.toLowerCase();
// // // // console.log(lowerstr)
// // // for(let a of arr){
// // //     console.log(a[0]);
// // //     a.toLowerCase();
// // //     a[0].toUpperCase();
// // //     // for( b of a){
// // //         // console.log( a)
// // //     // }    
// // // }
// let sample = 'facebook,aPPle,IBM'
// let arrS = sample.split(',')

// arrS[2]='Oracle'

//     console.log(`I work in ${arrS[2]} and My friend works in ${arrS[0]}, Our dream
//     company is ${arrS[1]}`)

//     let countries =['India','UnitedStates','Japan','China','EthiopiaEthiopiaEthiopia','Germany'] 
//     let count =1
//     let maxCountry
//     let maxlen
//     for (const iterator of countries) {                
//         if(count == 1){ maxlen = iterator.length }
//         // console.log(maxlen)
//         if(iterator.length > maxlen){
//             maxCountry=  iterator;
//             maxlen=  iterator.length
//             console.log(1)
//         }
//         count++
//     }
//     console.log(maxCountry)

//     const check = (x,y)=>{
//         return x+y
//     }
// console.log(check(2,3))


// //-------------------------------------------------------------

// const userS = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Harry: {
//       email: 'harry@harry.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     }
//   }
//   let countS=0, pointS=0
//  for(let check of userS){
//   if (check.isLoggedIn === true){
//       countS++
//   }
//   if (check.points > 30){
//     pointS++
// }
// }
//   console.log(countS)
//   console.log(pointS)
// ///----------------
// let sub ="Javascript"
// console.log(sub.includes('Java'))
// console.log('hii')
// setTimeout( () =>{
//   console.log('I will be')
// }, 5000)

function aCallBackFunction(){
  let date = new Date();
  console.log(date.toLocaleTimeString())
}
function clearIntFunc(){
  clearInterval(setId)
}
let setId = setInterval( aCallBackFunction, 1000);

setTimeout(clearIntFunc,20000);


