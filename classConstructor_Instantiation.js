/*
Instantiation of a class means creating an object from a class.We can create object whenever we want.
class allows to create many objects. This helps to reduce amount of code and repetition of code.

The following Person class constructor has firstName, age, isStudent property. These properties 
are attached to the Person class using this keyword. This refers to the class itself.
*/ 

class Person{
    constructor(firstName, age, isStudent){
        this.firstName =firstName
        this.age =age
        this.isStudent =isStudent
    }
}

class user{
    constructor(
        ID =123,
        company = 'Xyz',
        place = 'Chennai'
    ){
        this.ID =ID
        this.company =company
        this.place =place
    }
}

const person1 = new Person('ABC',20,true);
const person2 = new Person('Max',30,false);
const person3 = new Person('Jane',40,true);

const userObj = new user();//it will take default values in the const's paranthesis

console.log(userObj.company);
console.log(person2.age);
