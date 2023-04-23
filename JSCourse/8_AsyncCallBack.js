

/*
async means more than one at a time
JS is async
How does it handles it.
It does not exists by default in JS engine


In JS we have Execution context stack and Event queue

What is event queue
full of notifications of event
Any event outside of JS engine which it is not aware is called, it is placed on event queue

IMP, the event queue is looked up by JS engine when the execution stack is empty.

So there are 2 THINGS, execution context stack, and event queue

Execution context     Event queue
b()                   click event
a()                   http req event
global context
click func 
http req event func

First the execution context is made empty, b func, a func and then global context.
Then for every event, like click there is a func and that func is brought to exeuction context stack
to run and then it executes

so the browser asyncly puts things in event queue but in exec context it executes one at a time.

*/


// example below

function waitThreeSecond(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){
        console.log("finished function waitThreeSecond");
    }
}

function clickHandler(){
    console.log("click event clickHandler");

}

document.addEventListener("click", clickHandler);
waitThreeSecond();
console.log("finished execution");






/*
OP
finished function waitThreeSecond
finished execution
click event clickHandler     // click manually on the browswer screen to see this.




*/