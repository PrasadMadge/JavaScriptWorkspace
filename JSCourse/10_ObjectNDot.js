

// not the best way to create object
var person = new Object();

person["firstName"] = "Prasad";
person["lastName"] = "Madge";

var firstNameProp = "firstName";

console.log(person);
console.log(person[firstNameProp]);


// now with dot operator
console.log(person.lastName);

// adding another new object in person

person.address = new Object();
person.address.street = "Mehringdamm";
person.address.city = "Berlin";

console.log(person);