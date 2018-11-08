class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //return value whether it's TRUE or FALSE
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` His major is ${this.major}.`; //if major is defined append this to the description
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }  
}

const me  = new Traveler('Andrew Mead', 'Philadelphia');
console.log(me.getGreeting());

// const me  = new Traveler('Andrew Mead', 26, 'Computer Science');
// console.log(me.getDescription());

const other = new Traveler(undefined, 'Nowhere');
// console.log(other.getDescription());
console.log(other.getGreeting());