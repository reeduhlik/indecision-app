
// Car - classes can be used as a "framework" for reusable code

class Person {
    constructor (name = 'Default Name', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        //return 'Hi ' + this.name;
        return `Hi ${this.name}`;
    }
    getDescription () {
        return `Hi! I'm ${this.name} and ${this.age} years old`;
    }
}
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription () {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += `  My major is ${this.major}`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            greeting += `I'm from ${this.homeLocation}`;
        }
        return greeting; 
    }
}
const me = new Student('Reed', 10 ,'Computer Science');
console.log(me)

const other = new Person();
console.log(me.getDescription());

const traveler = new Traveler ('Travis', 40, 'Phily');
console.log(traveler.getGreeting());
