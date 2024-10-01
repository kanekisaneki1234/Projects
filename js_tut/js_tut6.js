// var myObject = {
//     'name': 'object',
//     'usage': 'none',
//     'position': 1,
//     'friends': ['me']
// }

// console.log(myObject)

// delete myObject.usage;

// console.log(myObject)

// function names(val) {
//     var matchup = {
//         'Alpha': 'Anos',
//         'Bravo': 'Beelzebub',
//         'Charlie': 'Chika',
//         'Delta': 'Daki'
//     }
//     return matchup[val]
// }

// console.log(names('Charlie'))

var myObj = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
}
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
    } else {
    return "Not Found"
    }
    }

// console.log(checkObj("Your Dad"));

myObj.gift = 'cornypony'
console.log(myObj);