// Data Types :  Null  , Undfeined and Any Type 
// null : Intentional absence of value
// kisi value ko ham absence krna chah rahe ho ...jisme hamien koi bh value nh dalni hai.
// kabh bh apko intensnoally kisi variable me blank value and absence value rakhna hai to "null" use karenge 
// intensonally : Shadeed
// null : only one value 
// null : type is Object
var userName = null;
console.log(userName);
console.log(typeof userName);
// Undefined : one value undefined .
// Default value of uninitialized variable 
// ye bh absence of value ko show karega but intentionally nh hain
// agar value assign krna bhool gaye .. By default  value assign ho jayegi But wo value undefined hoGi
var UserEmail;
console.log(UserEmail);
console.log(typeof UserEmail);
// Undefined Data Type is undefined 
// null and undefined falsy values hain
if (userName) {
    console.log("True");
}
else {
    console.log("False");
}
if (UserEmail) {
    console.log("True");
}
else {
    console.log("False");
}
// Any Type : Skip the type checking 
// Jo Compiler Type Checking kr rha hai use skip kr sakte hain
// API call krne pr jo Data get Hoga .. nh Pata kis Type ka data hai ..us ke lye use krte hain "Any" type
// Any : We are going to skip the type checking 
var networkData = {
    userPrice: 290,
    userName: "Hitesh"
};
console.log(networkData.userAge);
console.log(typeof networkData);
// Any : hamien type main matlab hi nh hai
/*
**************************************** Summary **********************************
01) null : stand alone value .
02) Intentionall absence of value.
03) null : Onlye One value
04) null Data Type is Object
05) kisi bh variable me intensnolly absence ya blank value dalni hoto null use hoGa
06) Undefined : One value Undefined
07) Default value of uninitialized variable .
08) agar kisi variable main value assigne krna bhool  gay.. By default value assign ho jayegi But wo value undefined hogi.
09) Undefined Data Type is Undefined
10) Null and Undefined Both are falsy values
11) Any :  Skip the Tpe checking
12) Any Jo compiler Type checking karega use skipb kr dega
*/
