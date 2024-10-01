class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.type = 'Parent';
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`)
    }
    describe () {
        console.log(`This is a ${this.type} type class.`)
    }
}

class Child extends Parent {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
        this.type = 'Child'
    }
    code () {
        console.log(`${this.name} is coding.`)
    }
}

let parent1 = new Parent('Owais', 22);
let child1 = new Child('Ammu',1);

child1.describe()
// child1.code()