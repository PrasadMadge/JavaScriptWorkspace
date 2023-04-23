

function doSomething(){

    var anArray = [];

    for(var i = 0; i < 3 ; i++){
        anArray.push(
           function(){
            console.log(i);
           } 
        )
    }

    return anArray;
}

var funcObj = doSomething();
funcObj[0]();
funcObj[1]();
funcObj[2]();

// outputs
3
3
3


/* 
why this happen.

Initially doSomething func is called.

Then execution context is being created.

Intially i values is 0 in the for loop
Then 1,2,3 and the loop breaks.

Then the execution context is garbage collected
Still the var stays at 3

Hence when each arr funcs are called and whiel they access 3
It outputs 3 here.

*/


