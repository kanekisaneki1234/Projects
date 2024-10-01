//Accessing nested arrays using for loops

myArray = [[1,2],[3,4],[5,6]]
var product = 1

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
        product *= myArray[i][j]
    }
}

console.log(product)

// Fix this