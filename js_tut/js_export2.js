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

export function bestModifyDB(id, prop, val) {
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