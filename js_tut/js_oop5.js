class AnimeDB {
    constructor() {
        this.db = {};
        this.id = 1
        // var id = 1
    }
    // addAnime(name, rating, genre, custom) {
    //     var id = 1
    //     let anime = {
    //     'Name': name,
    //     'Rating': rating,
    //     'Genre': genre,
    //     ...custom
    //     };
    //     // this.db[id]=anime;
    //     this.db={ 'id': anime};
    //     id++
    //     return `Entry added:\n${JSON.stringify(anime)}`
    // }
    addAnime(name, rating, genre, custom) {
        let anime = {
        'Name': name,
        'Rating': rating,
        'Genre': genre,
        ...custom
        };
        this.db[this.id] = (anime);
        this.id+=1
        return `Entry added:\n${JSON.stringify(anime)}`
    }

    removeAnime (id) {
        delete this.db[id];
        return `Entry Removed.${JSON.stringify(this.db)}`
    }

    updateAnime (id, prop, val) {
        var message
        // console.log(this.db[index].hasOwnProperty(prop))
        // console.log(JSON.stringify(this.db[index]))
        // console.log(JSON.stringify(this.db))
        if (!this.db.hasOwnProperty(id)) {
            return '!!! ID not found in the object. !!!'
        }
        else if (this.db[id][prop]==undefined) {
            if (prop==='Genre') {
                this.db[id][prop]=val
                message = 'Genre created and updated successfully!'
            }
            else {
                return '\n!!! Property not found. !!!\n'
            }
        }
        
        else {
            if (val==='') {
                delete this.db[id][prop]
                message = 'Deletion Operation Successful!'
            }
            else if (prop=='Genre') {
                val.forEach(element => this.db[id][prop].push(element))
                message = 'Array updation Successful!'
            }
            else {
                this.db[id][prop]=val
                message = 'Database updated successfully!'
            }
        }
        console.log('\n' + message + '\n')
        return JSON.stringify(this.db)
    }
}

let db1 = new AnimeDB;
console.log(db1.addAnime('Fullmetal Alchemist Brotherhood', 10))

console.log(db1.addAnime('One Punch Man', 9, ['Action', 'Thriller']))

console.log(db1.addAnime('Mashle', 8, ['Action', 'Thriller'], {'None': 'Nothing', 'None2': 'Nothing2'}))

console.log(db1.addAnime('Test', 8, ['Action', 'Thriller']))

console.log(db1.removeAnime(4))

console.log('\n',JSON.stringify(db1.db))

console.log(db1.updateAnime(4,'Genre',['Action','Adventure','Thriller','G.O.A.T']))

console.log(db1.updateAnime(1,'Genre',['Action','Adventure','Thriller','G.O.A.T']))

console.log(db1.updateAnime(1,'None',['Action','Adventure','Thriller','G.O.A.T']))

console.log(db1.updateAnime(2, 'Rating', 10))

console.log(db1.updateAnime(2, 'Genre', ['Supernatural']))

console.log(db1.updateAnime(1,'Genre', ''))


// var animeDB = {
//     '2345': {
//         'Name': 'Fullmetal Alchemist Brotherhood',
//         'Rating': 10,
//         'Genre': ['Action', 'Adventure', 'Thriller']
//     },

//     '1276': {
//         'Name': 'One Punch Man',
//         'Rating': 9,
//         'Genre': ['Action', 'Comedy', 'Thriller']
//     },

//     '9612': {
//         'Name': 'Mob Psycho 100',
//         'Rating': 10,
//         'Genre': ['Comedy', 'Action', 'Thriller', 'Supernatural']
//     },

//     '4523': {
//         'Name': 'Tokyo Revengers',
//         'Rating': 9,
//         'Genre': ['Comedy', 'Action'],
//         'Skibidi': 'Toilet'
//     },

//     '2754': {
//         'Name': 'Kimetsu no Yaiba',
//         'Rating': 9
//     }
// };

// var db =[]
// var entry = {
//     'Name': 'FMAB',
//     'Rating': '10'
// }
// var entry2 = {
//     'Name': 'OPM',
//     'Rating': '10',
//     'Genre': ['Supernatural','Action']
// }

// db.push(entry, entry2)

// console.log(JSON.stringify(db))

// console.log(!db[0].hasOwnProperty('Genre'))


// // db.splice(0, 1)

// // console.log(JSON.stringify(db))

// Potential things to implement: custom properties (done), object with id

//with list (without id)
// class AnimeDB {
//     constructor() {
//         this.db = [];
//     }
//     addAnime(name, rating, genre, custom) {
//         let anime = {
//         'Name': name,
//         'Rating': rating,
//         'Genre': genre,
//         ...custom
//         };
//         this.db.push(anime);
//         return `Entry added:\n${JSON.stringify(anime)}`
//     }

//     removeAnime (index) {
//         return `Entry removed:\n${JSON.stringify(this.db.splice(index, 1))}`
//     }

//     updateAnime (index, prop, val) {
//         var message
//         // if (!this.db.hasOwnProperty(id)) {
//         //     return '!!! ID not found in the object. !!!'
//         // }
//         // console.log(this.db[index].hasOwnProperty(prop))
//         // console.log(JSON.stringify(this.db[index]))
//         // console.log(JSON.stringify(this.db))
//         if (index>this.db.length) {
//             return 'Index is out of bounds.'
//         }
//         else if (this.db[index][prop]==undefined) {
//             if (prop==='Genre') {
//                 this.db[index][prop]=val
//                 message = 'Genre created and updated successfully!'
//             }
//             else {
//                 return '\n!!! Property not found. !!!\n'
//             }
//         }
        
//         else {
//             if (val==='') {
//                 delete this.db[index][prop]
//                 message = 'Deletion Operation Successful!'
//             }
//             else if (prop=='Genre') {
//                 val.forEach(element => this.db[index][prop].push(element))
//                 message = 'Array updation Successful!'
//             }
//             else {
//                 this.db[index][prop]=val
//                 message = 'Database updated successfully!'
//             }
//         }
//         console.log('\n' + message + '\n')
//         return JSON.stringify(this.db)
//     }
// }

// let db1 = new AnimeDB;
// console.log(db1.addAnime('Fullmetal Alchemist Brotherhood', 10))

// console.log(db1.addAnime('One Punch Man', 9, ['Action', 'Thriller']))

// // let x = 

// console.log(db1.addAnime('Mashle', 8, ['Action', 'Thriller'],{'None': 'Nothing', 'None2': 'Nothing2'}))

// console.log(db1.addAnime('Test', 8, ['Action', 'Thriller']))

// console.log(db1.removeAnime(3))

// console.log('\n',JSON.stringify(db1.db))

// console.log(db1.updateAnime(4,'Genre',['Action','Adventure','Thriller','G.O.A.T']))

// console.log(db1.updateAnime(1,'Genre',['Action','Adventure','Thriller','G.O.A.T']))

// console.log(db1.updateAnime(1,'None',['Action','Adventure','Thriller','G.O.A.T']))

// console.log(db1.updateAnime(2, 'Rating', 10))

// console.log(db1.updateAnime(2, 'Genre', ['Supernatural']))

// console.log(db1.updateAnime(1,'Genre', ''))

// Objects are faster than lists with creation, updating and search tasks cuz of the use of hash tables.