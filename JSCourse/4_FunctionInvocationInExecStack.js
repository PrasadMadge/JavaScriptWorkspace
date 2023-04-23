
function b(){

}

function a (){
    b();
}

a();

// When the code hits a func
// A new execution context is created for A and placed in execution stack.
// for new func call a new execution context is created and placed on exec stack.
// For b() call again the new execution context.

// when a func is over it pops/removed from execution stack.

/*
Execution stack
b()
a()
*/