var array =[];
var filler=[1,2,3];

const x = (arr,fil) => {
    fil.forEach(element => arr.push(element*element))
    return arr
}

console.log(x(array,filler))
// .map(item => item*2)
// arr=arr.map(element => element*2)
// console.log(x(array, filler))

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -21];
// const squareList = (arr) => {
//     const squaredIntegers = arr. filter (num => Number. isInteger (num) && num > 0).map (x => x*x)
//     return squaredIntegers;
// };

// const squaredIntegers = squareList (realNumberArray) ;
// console. log (squaredIntegers);