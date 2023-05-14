
function b(){
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

















/*
OP
1

// VEry important
// for func b() the outer enviormnet, is global context

This entire act, the chain of reference is called scope chain
chain is links to outer enviornment


*/

// NOW function inside a function



function aa() {

    function bb(){
        console.log(myVarb);
    }

    var myVarb = 2;
    bb();
}

var myVarb = 1;
aa();









/*
OP
2

*/