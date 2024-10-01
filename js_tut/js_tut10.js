// function converToInt(str) {
//     return parseInt(str, 16)
// }

// function converToInt(str) {
//     return str.toString(16)
// }

// console.log(converToInt(15))

// console.log(typeof(converToInt('786')))
// console.log(typeof('786'))

// var x = 69
// var y = x.toString(2)
// console.log(y)
// console.log(typeof(y))

// num = 'f'
// bum = parseInt(num, 16)
// cum = bum.toString(2)
// console.log(bum,'\n',cum)

// build a converter for hex and other data formats using radix

// function converter(num) {
//     binary = num.toString(2)
//     hexa = num.toString(16)
//     octa = num.toString(8)
//     console.log(binary, hexa, octa)
// }

// (converter(15))

function betterConverter(num, from, to) {
    var result
    if (from=='hexa') {
        if (to=='deci') {
            result = parseInt(num, 16);
        }
        else if (to=='bina') {
            result = parseInt(num, 16).toString(2);
        }
        else if (to=='octa') {
            result = parseInt(num, 16).toString(8);
        }
    }
    else if (from=='bina') {
        if (to=='deci') {
            result = parseInt(num, 2);
        }
        else if (to=='hexa') {
            result = parseInt(num, 2).toString(16);
        }
        else if (to=='octa') {
            result = parseInt(num, 2).toString(8);
        }
    }
    else if (from=='octa') {
        if (to=='deci') {
            result = parseInt(num, 8);
        }
        else if (to=='hexa') {
            result = parseInt(num, 8).toString(16);
        }
        else if (to=='bina') {
            result = parseInt(num, 8).toString(2);
        }
    }
    else if (from=='deci') {
        if (to=='bina') {
            result = num.toString(2);
        }
        else if (to=='hexa') {
            result = num.toString(16);
        }
        else if (to=='octa') {
            result = num.toString(8);
        }
    }
    return result
}

console.log(betterConverter(1111, 'bina', 'octa'))