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

    static campaign() {
        console.log("something");
    }
    static accumulateWealth() {
        console.log("something else");
    }
}

console.log(Governor);
