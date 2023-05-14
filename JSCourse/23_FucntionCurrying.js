// function currying
// creating a copy of a fucn with some preset values/params


var func1 = function multiply(a, b){
    return a*b;
}

console.log(func1.apply(this, [2,2]));

// but now what if we want to not execute the method and fix the param a to 10, unchangeable.
// bind to the resuce
//4

var bindObj = func1.bind(this,10);
console.log(bindObj(2));
// 20

var bindObj1 = func1.bind(this,10,20);
console.log(bindObj1(2));
//200

// the 10, 20 fixed on a, b the addition, 2 here is discarded hence 20