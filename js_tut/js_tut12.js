// function checkScope() {
//     "use strict";
//     var i = 'function scope';
//     if (true) {
//         var i = 'block scope'
//         console.log(i)
//     }
//     console.log(i)
// }

// checkScope()
// The above function will log 'block scope' both times.

function checkScope() {
    "use strict";
    let i = 'function scope';
    if (true) {
        let i = 'block scope'
        console.log(i)
    }
    console.log(i)
}

checkScope()

// The above code logs 'block scope' and 'function scope'.