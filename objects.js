/**
 * 
*/

//Creating an empty object
const person = {}

//Object with Values.
//The value of properties or keys 
//could be a string, number, boolean, an object, null, undefined or a function.
const user ={ firstName : "Max",
                lastName : "Hellen",
                age : 20,
                country : "India",
                city : 'Chennai',
                score : 100,
                skills : ['Javascript','React Js','Express Js'],
                //Objects methods.
                getFullName : function (){
                     //const fullName = this.firstName + ' '+ this.lastName;
                     const fullName = `${this.firstName}  ${this.lastName}`;
                     return fullName;
                },
                'phone Number' : '+11 1234 567'
             }
user.nationality = "Indian";//Setting the keys of an object.
console.log(user.nationality)//getting th keys
///OBJECTS METHODS:

//Copy the object without modyfying the original object.
const copyUser = Object.assign({},user);
console.log(copyUser);
console.log(Object.entries(copyUser))

//Getting keys of an object.
const keyValues = Object.keys(copyUser);
console.log(keyValues);

//Getting Values of an object.
const valuesOfKeys = Object.values(copyUser);
console.log(valuesOfKeys);

//Access object's keys ny dot operator.
console.log(user.getFullName());
console.log(user.country); // dot operator.
console.log(user['phone Number']); //when key has space in it,can't use dot operator.


