var x = Math.random()
// var y = x * 10
console.log(x)
// console.log(y)

var y = Math.floor(x)
console.log(y)


// function randomNumGen(min, max) {
//     return Math.floor(Math.random() * (max-min)) + min //+1 if you wanna include max too
// }

// console.log(randomNumGen(3,10)) 

console.log(Math.floor(0.99)) //This is to conclude that adding 1 to max-min would result in some cases where the number would be 0.9 which would also be 0, therefore it would be pointless and wont include min. Instead, add +1 to min at the end of the randomNumGen function is the right thing to do.