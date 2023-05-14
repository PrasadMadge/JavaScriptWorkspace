

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


// what if we want output 0,1,2

// 2 ways here

// 1st using let var

/* 
So let var holds the value for each block where it is used.
If used in for loop, creates a separate execution context for each foor loop exections as it is called.
*/



function doLet(){

    var anArray = [];

    for(var i = 0; i < 3 ; i++){
        let j = i;
        anArray.push(
           function(){
            console.log(j);
           } 
        )
    }

    return anArray;
}

var funcObj1 = doLet();
funcObj1[0]();
funcObj1[1]();
funcObj1[2]();

// outputs 0, 1, 2

// another way without using let var
// before js 6

 /* 
 IIFE to the rescue
 so if we want to preserve i, we need to create a new execution context for each i
 The only way to create a new EC is calling a func
 How to call a func without calling it explicitly
 IIFE to the resuce
 It gets called automatically when the syntax parser hits the code.
 */

 

 function doIIFE(){

    var anArray = [];

    for(var i = 0; i < 3 ; i++){
        anArray.push(
            function(j){
                return function(){
                    console.log(j);
                   } 
            }(i)
        )
    }

    return anArray;
}

var funcObj2 = doIIFE();
funcObj2[0]();
funcObj2[1]();
funcObj2[2]();

// outputs 0 1 2

