/**
 * Methods are JavaScript functions inside the class.
 * Static methods use static keyword which can be used as utility functions.
 * No constructor overloading is supported in Javascript.
 */
 class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 100
      this.skills = []
    }
        
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }

    ///The get method allow us to access value from the object by using get keyword.
    get getScore(){    
        return this.score;//Instead of fetching properties directly from Person class' object.
    }

    ///The setter method allow us to modify the value of certain properties.
    set setSkills(skills){
        this.skills.push(skills);
    }

    getPersonInfo()
    {
        let info = `${this.getFullName()} is ${this.age} and lives in ${this.city}, ${this.country}`;
        return info
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }    
  }

  const person1 = new Person('Max', 'Hellen', 50, 'India', 'Chennai','75','htl');
  person1.setSkills='HTML'
  person1.setSkills='CSS'
  person1.setSkills='Javascript'
  console.log(person1.score)
  console.log(person1.skills)
  person1.skills = ['React.js','Node.js']
  console.log(person1.skills)

  const student = new Student('Harry', 'Potter', 25, 'US', 'California',"Male");
  console.log(student.getPersonInfo())
  console.log(student.getFullName())
  console.log(person1);
  console.log(person1.getFullName());
  console.log(person1.getScore)//no need to use parantheses for getter methods.
  console.log(person1.skills);
  console.log(student.getPersonInfo());
