// const myObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
// const jsonString = JSON.stringify(myObject);
// console.log(jsonString);
// console.log(myObject)

function myQueue(arr,num) {
    arr.push(num)
    return arr.shift()
}

var myArray = [1,2,3,4,5]

console.log('Before: ', myArray)
console.log(myQueue(myArray,6))
console.log('After: ', myArray)