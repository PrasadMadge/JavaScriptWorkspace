

// another way to create object and the preffered way
// same as new object
// JS assumes {} as new object

var prasad = {
    firstName: "Prasad",
    lastName: "Madge",
    address: {
        city: "Berlin",
        street: "Mehringdamm"
    }
};

console.log(prasad);

function greet(person){
    console.log("Hi "+ person.firstName);
}

greet(prasad);

// creating object on the fly
greet({firstName: "Plus" , lastName: "Pro"});