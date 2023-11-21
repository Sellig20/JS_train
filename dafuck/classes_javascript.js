class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 45);
adam.greet();

const janja = new Person('Janja Gabar', 33);
janja.greet();