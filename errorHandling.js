/**
 * We can use err, e , error as a parameter for catch 
 */
function showError(){
        try {
            let lastName = 'abc'
            let fullName = fistName + ' ' + lastName
        } catch (err) {
            //console.error(err) // we can use console.log() or console.error()
            // console.log("Encountered an error "+err);
            throw new Error('Custom err!!! message')
        } finally {
            console.log('In any case I will be executed')
        }
        // throw 'Error2' // generates an exception with a string value
        // throw 42 // generates an exception with the value 42
        // throw true // generates an exception with the value true
        // throw new Error('Required') // generates an error object with the message of Required
}        

showError();

