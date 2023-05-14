/* 
underscrore is a lib in js
it has many funcs to use like map and filter
*/

//  lets do something same as last excersice

var arr1 = [1,2,3];

var arr2 = _.map(arr1, function(item){
    return item * 10;
})

console.log(arr2);

// filtering elements

var arr3 = _.filter(arr1, function(item){
    return item > 1;
})

console.log(arr3);
// 2,3 output

