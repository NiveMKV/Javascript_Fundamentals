/**
 * We can use err, e , error as a parameter for catch 
 */
function showError(){
        try {
            let lastName = 'abc'
            let fullName = firstName + ' ' + lastName
        } catch (err) {
            console.log("Encountered an error "+err);
        } finally {
            console.log('In any case I will be executed')
        }
        // throw 'Error2' // generates an exception with a string value
        // throw 404 // generates an exception with the value 404
        // throw true // generates an exception with the value true
        // throw new Error('Required') // generates an error object with the message of Required
}        

showError();

