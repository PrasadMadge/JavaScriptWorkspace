// a function which creates new object with help of new operator
// properties of a function constructor
// users this keyword
// does not uses return keywork

function personConstructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this is invoked');
}

var prasad = new personConstructor('Prasad','Madge');
console.log(prasad);

var rupesh = new personConstructor('Rupesh', 'Maurya');
console.log(rupesh);


// if the constructor function returns a value that would be returned and not the object
/* 
as soon as the new keyword is seen a new object is created, in this case prasad
the same prasad object replaces the this object here and the person object is returned here
*/

// HOW TO SET PROTOTYPE

/* 
Every func has a by default prototype property
Remember func is an obj in JS

If a func is normally used( without new operator)
This property is never used
But as soon as we use a func as function constructor this property 
is used
This is not the property of the fuction
But the object that will use this funciton as a functional contructor

FunctionName.prototype 

*/

personConstructor.prototype.getFullName = function(){
    return this.firstname + " " + this.lastname;
}

var raina = new personConstructor('Suresh', 'Raina');
console.log(raina.getFullName());

/* 
any fucntion I created with this keyword

I can anytime add a new function to them

Why can't we directly add these functions in funciton constructor

Because, each object calling it will get a separate funciton constructor
It takes mem space

In case of functions defined in prototype, all objects share the same copy of it




*/