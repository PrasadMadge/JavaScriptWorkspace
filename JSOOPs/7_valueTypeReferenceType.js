
// primitive data type.
// Number, String, undefined, null, Boolean, Symbol

// reference data type
// Object function Array

let x = 10;
let y = x;

x = 20;
console.log('x value is '+x)
console.log('y value is '+y)

// changing x to obj
let z = {value: 10};
let p = z;

z.value = 20;

// Both p and z are pointing towards the same point in memory hence both are 20
console.log('z value is '+z.value)
console.log('p value is '+p.value)
