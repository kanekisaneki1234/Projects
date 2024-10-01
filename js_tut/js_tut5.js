// function gae(isgae) {
//     if (isgae) {
//         return "gae"
//     }
//     return "not gae"
// }

// console.log(gae(false))

// function sizeCheck(num) {
//     if(num<5) {
//         return 'Tiny'
//     }
//     else if(num<15) {
//         return 'Small'
//     }
//     else if(num<10) {
//         return 'Medium'
//     }
//     else if(num<20) {
//         return 'Large'
//     }
//     else if(num>=20) {
//         return 'Huge'
//     }
// }

// console.log(sizeCheck(6))

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

// function golfScore(par, strokes) {
//     if (strokes==1) {
//         return names[0]
//     }
//     else if (strokes<=par-2) {
//         return names[1]
//     }
//     else if (strokes<=par-1) {
//         return names[2]
//     }
//     else if (strokes==par) {
//         return names[3]
//     }
//     else if (strokes==par+1) {
//         return names[4]
//     }
//     else if (strokes==par+2) {
//         return names[5]
//     }
//     else if (strokes>=par+3) {
//         return names[6]
//     }
// }

// console.log(golfScore(6,2))

function caseInSwitch(val) {
    var answer = '';
    switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "theta";
    break;
    }
    
    return answer;
}

console.log(caseInSwitch(1))