// where is the variable?
// Scope, till where are we able to see the variables.
// in below examples all vars will hold diff value
/*


*/


function b(){
    var myVar;
    console.log(myVar);
}

function a (){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();








// oP
/*
1
2
undefined

For every function a new independent execution stack is created.
if variable value is not found there is finds in the global execution context and grabs it.

A and B are indepenent here.

In B func here it had an undefined variable value otherwise if not 
defired it would have picketd it up via glabl exec context
*/

