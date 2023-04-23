
// dynamic typing, no error
var dynamicVar = true;
dynamicVar = "String";
dynamicVar = 123;

// Primitive data types
/*total 6
anything not object is primitive

undefined , for the engine
null, set explictly
boolean, true false
string , sequence of chars
number , only one numeric type, floating type, always has decimal points
symbol, used in ES6, next gen version of JS

// Operetors
takes 2 params and gives one result
*/
var a = 3+4;
console.log(a);

var b = 3 > 4;
console.log(b);


/*
operator precedence
means which operator function gets call first, if more than one on single line
the one with higher precendence gets call first

operator associativity
what order the operator gets called
left to right
right to left

*/

var q = 3 +4 * 5;
console.log(q);

var z = 3 +4 * 5;
console.log(q);