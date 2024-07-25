
//In typescript we create variables with type . So that we can assign any type of values to that variables.
let x: number = 2421;


// *) Typescript main at time of declaring varables main uski type ko bind kr sakte hain.
// *) agar Type nh bh btain compiler khud infere kr lega ye is type ki value hai.
// *) as same jb function ke parameters pass karenge unke bh type btainge and  return m bh  inke bh type btainge




// +++++++++++++++++++++++++ Types in Typescript +++++++++++++++++++++++++++++
// 3 primitive  types
// 1) strings  2) Number 3)Boolean 


// 1) Strings : Represent text Data | Sequence of characters | one and more characters place with in double qouts , single qouts and backticks .

// explicit annotate  
    let userName : string = "Shahmeer";


// Implicit     | compile khud infere karega 
let userPassword = "283#$@*&khan"

// agar sirf varable initialize kya hai bd m declare krna hai to Explicit annotate krna hoga
let userAdress : string

userAdress = "USO";

// agr yahan type mention nh kre to error ayega 
// ek banefit string ke sare method mil jayenge 
userAdress.toLocaleLowerCase();




let isActive : boolean = true;
isActive = false;

isActive = true;


/* **************************** Summary ************************************
01) In typescript we create variables with type.
02) So that we  can assign any type of values to that variables .
03) In case we can't assign type with variables so  compiler infere value types.
04) we assign value type with time of declare functions parametres .
05) 3 Primitive Data Types in Typescript 1) String 2) Number 3) Boolean .
06) strings : Represent Text Data | Sequence Of Characters .
07) Strings : One and more Characters place with is double qoutes , single qoutes and Backticks.
08) We create variables with Type is Called Explicit annotate (let user:string = "Hammad") .
09) We don't create ariables with Type is Called Implicite (let user = "Ammar").
10)  If  We don't create ariables with Type Compiler  will infere itself.
11) Number : Represent Number 
12) Boolean : Represent true and false value
*/

