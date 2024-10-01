// let num = 42;
// let str = String(num);     // Convert number to string
// let bool = Boolean(num);   // Convert number to boolean

// console.log(bool)

// function exitEarly(num) {
//     if (num<0) {
//         return 'Nah,I\'d win'
//     }
//     return 'Fraudkuna'
// }

// console.log(exitEarly(0))

// function divide(a, b) {
//     if (b === 0) {
//         throw "Division by zero is not allowed";
//     }
//     // Without the above block of code, the program will return answer as infinity
//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// } catch (error) {
//     console.log("Error:", error); // Outputs: "Error: Division by zero is not allowed"
// }

try {
    // Code that may potentially throw an exception
    throw new Error("Something went wrong");
} catch (error) {
    // Handle the exception
    console.log("Error:", error.message); // Outputs: "Error: Something went wrong"
}

// console.log(divide(10,0))

// Process exited with code 1
// Uncaught Error Division by zero is not allowed
// at divide (file:///Users/owais/js_tut/js_exp.js:18:9)
// at <anonymous> (file:///Users/owais/js_tut/js_exp.js:29:13)
// at Module._compile (node:internal/modules/cjs/loader:1376:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
// at Module.load (node:internal/modules/cjs/loader:1207:32)