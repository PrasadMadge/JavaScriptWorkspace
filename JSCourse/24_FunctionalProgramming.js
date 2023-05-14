/* 
Same like lambda expression in java, but more exposed.
func prog is very powerfull
*/

/* 
Make sure the funcs which are tiny one should not mutate data
*/

var arr1 = [1,2,3];

var arr2 = [];

for(var i = 0; i < arr1.length ; i++){
    arr2.push(arr1[i] * 3);
}

console.log(arr2);

// this is one way of mutating the arr1 into arr2

// now with functional programming

function mutateArray(arr, fn){
    var newArr = [];
    for(var i = 0; i < arr.length ; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

var arr3 = mutateArray(arr1 , function (item){
    return item * 10;
})

console.log(arr3);

// returning boolean if > than

var arr4 = mutateArray(arr1 , function (item){
    return item > 1;
})

console.log(arr4);

// op, false, true, true

// now, what is if we want to pass the 1 also dynamically

var arr5 = mutateArray(arr1 , function (limiter, item){
    return item > limiter;
}.bind(this,2))

console.log(arr5);

// another variaton of the same with function segregation

function checkLimit(limiter, item){
    return item > limiter;
}

var arr6 = mutateArray(arr1, checkLimit.bind(this, 2));
console.log(arr6)

// how to avoid calling bind all the time
// we need a func where we pass a func and it binds the limiter

var setLimiter = function(fn, limiter){
    return fn.bind(this, limiter);
}

var arr7 = mutateArray(arr1, setLimiter(checkLimit, 3));
console.log('arr7')
console.log(arr7)

// anothervariation from the course.

var setLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

var arr8 = mutateArray(arr1, setLimitSimplified(3));
console.log('arr8')
console.log(arr8)

/* breakdown of the above call

mutateArray takes func as 2nd arg and this func needs only 1 arg too
^
setLimitSimplified takes only limit arg
^
returns function with limiter set and a fun wit

mutateArray < setLimitSimplified < anonymous function < (item > limiter)


*/