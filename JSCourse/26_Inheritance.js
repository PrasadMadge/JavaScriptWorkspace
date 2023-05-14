
/* 
Inheritance
one object gets props and methods of another object

Classical inheritance
very verbose


Prototypal inheritance
flexible
extensible
easy to understand
*/

/* 
All objects in JS including funcs have prototye proto {} property

obj1 > internal proto {} -> prop 2
Internal proto {} -> Another proto {} containing another prop3

Hence there is prototype chaining here
obj1.prop3 is possible.

*/

var person = {
    firstName : 'Default',
    lastName : 'Default',
    getFullName : function(){
        console.log(this.firstName+ " "+this.lastName);
    }
}

var prasad = {
    firstName : 'Prasad',
    lastName : 'Madge'
}

prasad.__proto__ = person;

prasad.getFullName();

// everything in js is object except primitive
// hence all objects in js do have a prototype proto {}
// Except base obj 
// for any object the base prototype is Object{} prototype
