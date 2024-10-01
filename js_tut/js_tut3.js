// function myFunction(num)
// {
//     console.log('Hello World: ',num);
// }

// for (let i = 1; i <= 4; i++) {
//     myFunction(i);
// }

// // globalVar = 11 //A variable can be declared without using var, let or const. But it automatically becomes a global variable.
// var globalVar = 11

// function func1()    {
//     nonGlobalVar = 10 //This is an example of how a variable becomes global automatically when declared without var, let or const; even when it is inside a function.
// }

// function func2()    {
//     if (globalVar === 11)
//         console.log('Yes')

//     if (nonGlobalVar == 10)
//         console.log('YEET')
// }

// func1();
// func2();

// var myFav = "Rias";

// function society()  {
//     var myFav = "Ochaco"
//     return myFav
// }

// console.log('My Fav when I am in the society: '+ society());

// console.log('My Fav fr: ', myFav);

// As you can see, you can create 2 variables of the same name with different values. One with a global and one with a local scope. However, when you try to access them locally, the local one takes precedence over the global one.
// myFavNum = '123';
// myFavNum = Number(myFavNum);

// console.log('My Fav fr: ', typeof(myFavNum));

function subtraction(a,b)  {
    return a-b
}

console.log(subtraction(420,69))

var sum = 10
function subtraction()  {
    sum -= 7
}

d = subtraction()

console.log(d)

console.log(sum)

// This is to demonstrate that a function without a return value returns as undefined when assigned to a variable or logged directly to a console.