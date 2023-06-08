// https://ps-react-curriculum.herokuapp.com/308H/7/lab-3/
// R-ALAB 308H.7.2 - Static Methods, Static Properties, and Inheritance


  /* ----------------------------- */
 /* Static Methods and Properties */
/* ----------------------------- */


// There is only one Governor in the state; add static methods and properties you'd expect a Governor to have.
// Log the properties and test the methods (but don't instantiate an object of the class).


class Governor {
    static name = "Jerry Brown";
    static dob = "19380407";
    static party = "Democratic";
    static state = "California";
    static terms = ["1975-1983", "2011-2019"];

    static campaign() {
        console.log(`Vote for ${this.name} to govern ${this.state}!`);
    }
    static accumulateWealth() {
        console.log(`The people of ${this.state} can trust ${this.name}!`);
    }
}


// console.log(Governor);
// Governor.campaign();
// Governor.accumulateWealth();


class Person {
    constructor (name, dob, health) {
        this.name = name;
        this.dob = dob;
        this.health = health; // something
    }
    greet() {
        return(`Hello my name is ${this.name}. Be prepared for my birthday on ${this.dob}.`);    
    }
    reportHealth() {
        return(`My health is currently ${this.health} which explains why I fell like I do.`);
    }
}

class PostalWorker extends Person {
    constructor(name, dob, hireDate, empId) {
        super(name, dob);
        this.hireDate = hireDate;
        this.empId = empId;
    }
    clockIn() {
        console.log("What a great day to be alive and working!");
    }
    sortMail() {
        console.log("This mail won't sort itself. I'm on it!");
    }
    clockOut() {
        console.log("Another day, another dollar.");
    }
}

class Chef extends Person {
    constructor(name, dob, speciality) {
        super(name, dob);
       this.speciality = speciality;
    }
    makeLunch() {
        console.log(`Time to make my world-famous ${this.speciality}`);
        }
}

const someBody1 = new PostalWorker("Mc Gee", 19941031, 20220505, 666);
const someBody2 = new PostalWorker("Susan", 19940522, 20180105, 6660);
const someBody3 = new Chef("Bobo", 19941031, "Cake");
const someBody4 = new Chef("Jojo", 19941031, "Squid");
