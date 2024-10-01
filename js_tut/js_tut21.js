// Extras : Rest and spread operator

const sum = (function() {
    return function sum(...args) {
        // const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console. log (sum (1, 2, 3,5));

let obj = {
    'person1': 'me',
    'person2': 'you'
}

let obj2 = { ...obj }

console.log(obj2)