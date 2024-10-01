import { bestModifyDB } from "./js_export2.js";

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

console.log(JSON.stringify(bestModifyDB(2754, 'Genre', ['Action', 'Thriller', 'Supernatural'])))