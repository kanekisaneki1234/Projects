// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//     PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try {
//         MATH_CONSTANTS. PI = 99;
//     }
//     catch ( ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS. PI;
// }
//     const PI = freezeObj();

const obj = {
    property1: 42
};

// "use strict";
// Freeze the object
Object.freeze(obj);
  
// Attempt to modify the property
obj.property1 = 50; // This assignment will be ignored in strict mode or throw an error in non-strict mode)
console.log(obj.property1); // Outputs: 42 (the original value) 