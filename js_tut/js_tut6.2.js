var animeDB = {
    '2345': {
        'Name': 'Fullmetal Alchemist Brotherhood',
        'Rating': 10,
        'Genre': ['Action', 'Adventure', 'Thriller']
    },

    '1276': {
        'Name': 'One Punch Man',
        'Rating': 9,
        'Genre': ['Action', 'Comedy', 'Thriller']
    },

    '9612': {
        'Name': 'Mob Psycho 100',
        'Rating': 10,
        'Genre': ['Comedy', 'Action', 'Thriller', 'Supernatural']
    },

    '4523': {
        'Name': 'Tokyo Revengers',
        'Rating': 9,
        'Genre': ['Comedy', 'Action'],
        'Skibidi': 'Toilet'
    },

    '2754': {
        'Name': 'Kimetsu no Yaiba',
        'Rating': 9
    }
};

console.log(typeof(animeDB))
// function copy(obj) {
//     var copy = JSON.parse(JSON.stringify(obj));
//     return copy
// }
// copy(animeDB)

// function modifyDB(id, prop, val) {
//     outerloop:
//     if (animeDB.hasOwnProperty(id)) {
//         // console.log('Lmao')
//         if (animeDB[id].hasOwnProperty(prop)) {
//             // animeDB[id][prop] = val
//             if (val==='') {
//                 delete animeDB[id][prop];
//                 var message = 'Task completed1!'
//                 //Check
//             }
//             else if (prop==='Genre') {
//                 // console.log('This ran')
//                 for (let i = 0; i < val.length; i++) {
//                     animeDB[id][prop].push(val[i]);
//                 }
//                 var message = 'Task completed2!'
//                 //Check
//             }
//             else {
//                 animeDB[id][prop] = val;
//                 var message = 'Task completed3!'
//                 //Check
//             }
//             // break outerloop;
//         }
//         else if (prop==='Genre') {
//             // console.log('This ran too')
//             animeDB[id][prop] = [];
//             for (let i =0; i < val.length; i++) {
//                 animeDB[id][prop].push(val[i]);
//             }
//             var message = 'Task completed4!'
//             //Check
//         }
//         else {
//             var message = '!! Property not found !!'
//             //Check
//         }
//         // animeDB[id][prop] = val
//             // console.log('This ran')
//             // animeDB[id][prop].push(val);
        
//         // animeDB[id][prop] = val
//     } 
//     else {
//         var message = 'ID or property not found in the object.'
//         //Check
//     }
//     // console.log(animeDB[id].hasOwnProperty(prop))
//     console.log(message + '\n')
//     return animeDB;
// }

// console.log(JSON.stringify(modifyDB(2754, 'Genre', ['Action', 'Thriller', 'Supernatural'])))

// console.log(JSON.stringify(modifyDB(2754, 'Rating', 10)))

// console.log(JSON.stringify(modifyDB(4523, 'Genre', ['Supernatural'])))

// console.log(JSON.stringify(modifyDB(4523, 'Skibidi', '')))

// console.log(JSON.stringify(modifyDB(4523, 'Skibidi', 'Toilet')))

// console.log(JSON.stringify(modifyDB(6969, 'Skibidi', 'Toilet')))

function bestModifyDB(id, prop, val) {
    var message
    if (!animeDB.hasOwnProperty(id)) {
        return '!!! ID not found in the object. !!!'
    }

    else if (!animeDB[id].hasOwnProperty(prop)) {
        if (prop==='Genre') {
            animeDB[id][prop]=val
            // for (i=0; i<val.length; i++) {
            //     animeDB[id][prop].push(val[i]);
            // }
            message = 'Genre created and updated successfully!'
        }
        else {
            return '!!! Property not found. !!!'
        }
    }
    
    else {
        if (val==='') {
            delete animeDB[id][prop]
            message = 'Deletion Operation Successful!'
        }
        else if (prop=='Genre') { 
            val.forEach(element => animeDB[id][prop].push(element))
            // for (i=0; i<val.length; i++) {
            //     animeDB[id][prop].push(val[i]);
            // }
            message = 'Array updation Successful!'
        }
        else {
            animeDB[id][prop]=val
            message = 'Database updated successfully!'
        }
    }
    console.log('\n' + message + '\n')
    return animeDB
}

console.log(JSON.stringify(bestModifyDB(2754, 'Genre', ['Action', 'Thriller', 'Supernatural'])))

console.log(JSON.stringify(bestModifyDB(2754, 'Rating', 10)))

console.log(JSON.stringify(bestModifyDB(4523, 'Genre', ['Supernatural'])))

console.log(JSON.stringify(bestModifyDB(4523, 'Skibidi', '')))

console.log(JSON.stringify(bestModifyDB(4523, 'Skibidi', 'Toilet')))

console.log(JSON.stringify(bestModifyDB(6969, 'Skibidi', 'Toilet')))



// function betterModifyDB(id, prop, val) { //maybe not better performance-wise but reduced LOC
//     if (!animeDB.hasOwnProperty(id)) {
//         return '!!! ID not found in the object. !!!'
//     }

//     else if (!animeDB[id].hasOwnProperty(prop)) {
//         if (prop==='Genre') {
//             animeDB[id][prop]=[];
//             for (i=0; i<val.length; i++) {
//                 animeDB[id][prop].push(val[i]);
//             }
//             message = 'Genre created and updated successfully!'
//         }
//         else {
//             return '!!! Property not found. !!!'
//         }
//     }
    
//     else {
//         val=='' ? delete animeDB[id][prop] : prop == 'Genre' ? val.forEach(item => animeDB[id][prop].push(item)) : animeDB[id][prop] = val
//     }
//     // console.log('\n' + message + '\n')
//     return animeDB
// }
// // cannot use any more conditional operators since they work as one condition one line execution only. Very limited scope.

// console.log(JSON.stringify(betterModifyDB(2754, 'Rating', 10)))

// console.log(JSON.stringify(betterModifyDB(4523, 'Genre', ['Supernatural'])))

// console.log(JSON.stringify(betterModifyDB(4523, 'Skibidi', '')))

// console.log(JSON.stringify(betterModifyDB(4523, 'Skibidi', 'Toilet')))

// console.log(JSON.stringify(betterModifyDB(6969, 'Skibidi', 'Toilet')))

// console.log(JSON.stringify(betterModifyDB(2754, 'Genre', ['Action', 'Thriller', 'Supernatural'])))

// function betterModifyDB(id, prop, val) {
//     if (!animeDB.hasOwnProperty(id)) {
//         return '!!! ID not found in the object. !!!'
//     }

//     else if (!animeDB[id].hasOwnProperty(prop)) {
//         if (prop==='Genre') {
//             animeDB[id][prop]=[]
//             for (i=0; i<val.length; i++) {
//                 animeDB[id][prop].push(val[i]);
//             }
//             message = 'Genre created and updated successfully!'
//         }
//         else {
//             return '!!! Property not found. !!!'
//         }
//     }
    
//     else {
//         if (val==='') {
//             delete animeDB[id][prop]
//             message = 'Deletion Operation Successful!'
//         }
//         else if (prop=='Genre') {
//             for (i=0; i<val.length; i++) {
//                 animeDB[id][prop].push(val[i]);
//             }
//             message = 'Array updation Successful!'
//         }
//         else {
//             animeDB[id][prop]=val
//             message = 'Database updated successfully!'
//         }
//     }
//     console.log('\n' + message + '\n')
//     return animeDB
// }

// array =[]
// filler=[1,2,3]

// const x = (arr,fil) => {fil.forEach(element => arr.push(element*element))
// return x
// }
// .map(item => item*2)
// arr=arr.map(element => element*2)

    

// console.log(x(array, filler))

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -21;
//     const squareList = (arr) => {
//     const squaredIntegers = arr. filter (num => Number. isInteger (num) && num > 0). map (x
//     return squaredIntegers;
//     } ;
//     const squaredIntegers = squareList (realNumberArray) ;
//     console. log (squaredIntegers);