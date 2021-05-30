/**
 * Promise has two states Resolved/Success, Rejected/failure
 */

function funcOne(){
    console.log('This is function number 1')
}

function funcTwo(n=false){
    return new Promise( (resolve, reject) =>{
        setTimeout(()=>{
        //console.log('This is function number 2')
        let promiseReturned = n;
            if(promiseReturned){
                resolve("Promise is resolved!")
            }else{
                reject(new Error('Promise is not resolved'))
            }
        }, 5000)
    })    
}

function funcThree(){
    console.log('This is function number 3')
}

(async ()=>{
    funcOne()
    let result = await funcTwo()
    console.log(result)
    funcThree()
})()

// async function finalCall(){
//     funcOne()
//     // let result = await
//      let result = await funcTwo()
//     console.log(result)
//     funcThree()
// }
// finalCall()