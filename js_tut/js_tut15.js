// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2) ;
// };
// console.log(myConcat([1, 2], [3, 4, 5]))

// SHORTENED VERSION USING ARROW FUNCTION
// var myConcat = (arr1,arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]))

// Immediately Invoked Function Expression
// It is invoked automatically after its initialisation and runs right away. It runs atleast once.

const increment = (function() {
    return function inc (number, value = 1) {
        return number + value;
    }
})();
    
console.log(increment(5, 2));
    
console.log(increment(5));


// (square=function (num=3) {
//     console.log(num*num)
// })()

// square(10)

// var prod = (function () {
//     return function prod(num1, num2=num1) {
//         return num1*num2
//     }
// })()

// console.log(prod(5))

// (prod = function prod(num1,num2=num1) {
//     return num1*num2
// })()

// console.log(prod(5))