let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);  // outputs 10

// new example
let obj = { value:10};

function increment(obj){
    obj.value++;
}

increment(obj);  // obj is passed by reference
console.log(obj) // output 11