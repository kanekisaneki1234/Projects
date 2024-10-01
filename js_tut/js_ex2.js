var profiles = [
    {
        "firstname" : "Riza",
        'lastname': 'Hawkeye',
        'Anime': 'Fullmetal Alchemist Brotherhood'
    },
    {
        'firstname': 'Edward',
        'lastname': 'Elric',
        'Anime': 'Fullmetal Alchemist Brotherhood'
    },
    {
        'firstname': 'Roy',
        'lastname': 'Mustang',
        'Anime': 'Fullmetal Alchemist Brotherhood'
    },
    {
        'firstname': 'Saitama',
        'lastname': 'Unknown',
        'Anime': 'One Punch Man'
    },
    {
        'firstname': 'Bubuki',
        'lastname': 'Hellish Blizzard',
        'Anime': 'One Punch Man'
    }
]

function lookup(name, prop) {
    if (profiles[0].hasOwnProperty(prop)) {
        for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].firstname == name || profiles[i].lastname == name) {
                return profiles[i][prop];
                // return result
            }
            else {
                message = "No Match Found";
                // The mistake I was making earlier was using return statement prematurely over here, resulting in the loop to end right away after the first object did not match
            }
        }
    }
    else {
        message = "No Such Property Found";
    }
    return message
}
console.log(lookup('Hawkeye', 'Anime'));
console.log(lookup('Hawkeye', 'firstname'));
console.log(lookup('Roy', 'Anime'));
console.log(lookup('Mustang', 'firstname'));
console.log(lookup('Bubuki', 'Anime'));