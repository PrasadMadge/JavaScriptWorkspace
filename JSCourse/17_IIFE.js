
// Immediately invoked function expression.
// invoked is execution
// expression is a set of statement which returns something

// normal func expression

function func1(name){
    console.log('Hello '+ name);
}
func1('Prasad')


// var with anonymous func

var funcObj = function(name){
    console.log('Hello '+ name);
}
funcObj("Prasad")


// IIFE variation 1
var funcIIFE = function(name){
    console.log('Hello '+ name)
}('Madge');


// IIFE variation 2

//valid JS expression
3;

// In JS whatever is in () expects an expression, like (3*8)

// Hence if we directly copy the above func and paste it, 
//it will give an error.

/* function(name){
    console.log('Hello '+ name)
}('Madge'); */

// Uncaught SyntaxError: Function statements require a function name (at 17_IIFE.js:38:1)
// it returns a func obj but since it is not inside () the syntax parser is unhappy
// hence we use ()


(function(name){
    console.log('Hello '+ name)
}('Madge'));

// this works now

// what if it has a return statement.
// it returns whatever it returns

console.log(
            (function(name){
                var greeting = 'Hello return '+ name;
                return greeting;
                            }('Madge')
            )
)