//new task:
// Person classi yaradib ona name age ve surname verin daha sonra onun doğum ilini hesablayan class icinde bir function yazin
// Meselen age 20 verdiyimizde function 2004 nəticəsini versin

class Person {
    constructor (name,surname,age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
    findBirthDate () {
        const currenYear = new Date().getFullYear();
        const birthYear = currenYear - this.age;
        console.log(`BirthYear: ${birthYear}`);
    }
}

const person1 = new Person("Rovshan", "Alizada",28);
person1.findBirthDate();