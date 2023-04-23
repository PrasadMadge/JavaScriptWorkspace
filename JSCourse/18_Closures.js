
function parent(firstName){

    return function(lastName){
        console.log(firstName+ " "+lastName)
    };
}

// one way of invoking
parent('Prasad')('Madge');

// another way
var funcObj = parent('Prasad')
funcObj('Madge');

// seems working but how the funcObj has access to the Prasad argument here.

/* 
First parent execution context was created
Func and vars were hoisted

Parent executio context was executed.
Here the firstname was also saved in the var exectuion context.
After the execution context is finished, it is garbage collected
But not the var env, holding all var values

Hence when child func is called, it uses scope chain to target firstname

Hence child func closes the var of the parent func, this is called closure
*/