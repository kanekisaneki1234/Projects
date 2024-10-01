// try {
//     console. log('Start of try runs');
//     unicycle;
//     console. log('End of try runs -- never reached');
// } 
// catch(err) {
//     // console. log('Error has occured: ' + err.stack); //Gives a lot of information about the error
//     console. log('Error has occured: ' + err);
// } 
// finally {
//     console. log('This is always run');
// }

// console. log(' ...Then the execution continues');

var person1 = {
    'Name': 'Jason'
}

try {
    if (!person1.Gender) {
        throw new SyntaxError('Data not found.');
    }
    console.log(person1.Gender)
}

catch(err) {
    console.log(err.name + '\n' + err.message);
}
// So basically try catch throw statements are used to catch and customise real errors. They will just etur false if there are no errors.

// let json = '{ "age": 30}';
// try {
//     let user = JSON. parse(json);
//     if (!user.Name) {
//     throw new SyntaxError("Incomplete data: no name");
//     }
//     console. log( user.name );
// }
// catch(e) {
//     console.log("JSON Error:" + e.message );
// }