// Functions in Typescript 
// Functions : Set of statement written for doing a specific task is called function .
// 1) function has name 
// 2) Function has block of code 
// 3) functions can take parameters 
// 4) functions can written values 




// function ke parameters ke Type ka typescript m khayal rakhenge 
// *) In Typescript type of parameters and return type is most important thing .

// ** Syntax **

// function nameOfFunctions ( a: type, b : type ): 
// return type 
// {
    // statement 
// }


// Example :
function ramu(rs:number, name:string)  {
    console.log("Hello sir,  what can i do for  you");

}
ramu(12,"left");
// parameter ke type difine krna must hai 
// function ka type agar "any" ya "void" ho to return method lagana zarori nh 
// But number ya string ya koi bh data Type hoto return method lagana zaroori ha


/*
**************************************** Summmary ****************************
01) Functions : Set of statement for doing  a specific task is called function.
02) Function has name 
03) Function has block of code 
04) Function can take parametres 
05) Function can written values 
06) In Typescript type of parameters and return type is most important thing.
07) Parameter type is must in Typescript
08) If data type "any" Or "void" so returnn method is must 
09) otherwise not compulsory return method 
*/