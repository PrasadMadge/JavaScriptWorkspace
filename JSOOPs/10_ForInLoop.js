
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("this is constructor log");
    }
}

const circle = new Circle(1);

// key holds the value of one key in the obj
for(let key in circle){
    console.log(key, circle[key]);
}

// for getting only props and NO functions
for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// another appraoch to get all keys
// in this approch you cannot separate funcs and primitive types
const keys = Object.keys(circle);
console.log(keys);

// how to knw if the obj has the given prop or now
// Using IN operator
if('radius' in circle)
    console.log('Circle has a radius');

