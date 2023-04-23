

/*
first class function, JS supports it

- anything which can be done with objects strings etc can be done with funs
- assign to variables
- pass functions as parameters to other funcs
- you can create them on the fly

- funcs object is a special type of object
- it resides in memory
- has special properties as compared to normal object
- interesting fact is that you can attach props and methods to a function\
- why? because its  a object,

- function attachble to
- object
- function
- primitive

- function not nessarylirly need to have a name, can be anonymus


- very strange
- in JS every func has special prop called CODE
- the JS code is saved in this prop
- CODE property is invocable.
- It means we can ask to run the code sitting in the property
- 

*/

// must read above

function greet(){
    console.log("greet log");
}

greet.newParam = "cool";
console.log(greet)

image.png