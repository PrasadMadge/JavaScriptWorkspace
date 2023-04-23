
b();   
console.log(a);

var a = 'Hello world';

function b(){
    console.log('calling func b');
}

// OP
// calling func b
// undefined

// IMP
// The above phenomena is called Hoisting, funcs and var can be moved anywhere




// Execution context is creating in 2 phases
// global obj and this object set in memoray, outer enviorment creation (scans your code)
// Recognize whee is var and obj is created.

// Setup mem spage for vars and funcs, is valled Hoisting 

// Very imp, before running the js code
// For funcs, the entire func body is assigned space in memory
// For vars, not the value, puts a place holder undefined, it is set in execution phase
// All vars are intially set undefined intially  