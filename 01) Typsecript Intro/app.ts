//
// What is TypeScript ?

// 1) TypeScript is superset of Java Scritp.

// 2) Java Script is Subset of Type SCript .

// 3) Typescript shares same syntax as java script , But adds something extra to it (strong typing system like Java , C++)

// 4) Typescript provide  extra capabilities by adding "type" to Java Script .

// Why to Use Typescript 

// 1) Typescript allows to developers to bind the type to variables and functions return statements 

// 2) That helps to remove all the type error during runtime 

// Example :

// Java Script 

// no type information  with variable 
// let Username = "Sherry";
// Username = 12;
// Username = true;

// all the assigment is correct 


// Type Script :

// Type iformation is provided while declaring the variable 
let StdName : string = "Shahmeer";

// if we assign another type data to StdName
// then we get error 
// StdName = 1234// error


// Lets uderstand more :
// suppose we are trying to access any property of the object that is not there.
// Then in TypeScript we will get error before execution of a program itself . 
// But in Java Script we will get the error during runtime which is more dangrous .


// Example 
// let Obj1 = {
//     userName : "Sajid",
//     custumerName : "majid",
// }

// console.log(Obj1.Ownername); // Error

// Typescript uses compile time type checking . Which means it checks if the specified types match before runing the code , not while running the code 



/*
 *********************************** Summary ********************************
01) Typescript is Superset of Java Script.
02) Javascript is Subset of Typescript.
03) Typescript share same syntax as Java script.
04) But add something extra to it liek (strong typing sysytem Java , C++).
05) Typescript Provide  extra capabilities by adding "type" in Javascript.
06) Typescript all about Static Checking.
07) Typescript allows to developers to bind the "type" to variable and functions return  statements .
08) That helps remove all the type error during runtime .
09) Typescript uses Compile time type Checking .
*/



