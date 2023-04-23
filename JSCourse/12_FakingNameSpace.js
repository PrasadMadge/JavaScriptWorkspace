var greet = "hello";
var greet = "Hola";

console.log(greet);

/*
OP
Hola

the above things creates a confusion, namespace collision
to avoid this we can do the following
*/

var english = {};
var spanish = {};

english.greet = "hello";
spanish.greet = "Hola"

console.log(english);

/* 
this avoids the namespace collision
but you can also create anothe layer of data in english
*/

english.greeting.greet = "Hello";

/*
Give runtime error ERROR above "Cannot set properties of undefined (setting 'greet')"
because
indirectly it is 
undefined.greet = "Hello";

Note this happens only wit DOT operator

lets see with {}
*/

var englishNew = {
    greeting : {
        greet : "Hello"
    }
}

console.log(englishNew);




