// Array : Orderd list of Data 
// ek orderd main bohat sara data list karainge 

// array Syntax 
// let arr1 : type[];

// //Example 
let arr2 : number [] = [1,2,3,4,56,6,7,7];
console.log(arr2);
console.log(typeof arr2);

// change Array Values
arr2[3]= 56;
console.log(arr2);

// array with strings 
let friends : string []
friends =  [
    "Daniyal", 
    "zain",
    "Ahmad",
    "Talat"
]
console.log(friends);

for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index]
    console.log(element); 
}

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
}
/*
// Array Methods 
pop(); last element remove 
push(); last element add
unshift(); first element  add
shift(); first element remove 

join(): Join array elements 
*/
console.log(arr2.join("-")); // [1-2-3-56-56-6-7-7]

// ForEach : Array ki sb element pr action perform krega 
friends.forEach(( value)=>{
    return value.toUpperCase()
    console.log(value); //sb element pr action perform hoga 
    //     // But yahan pr sare Strings ke element aa rahe hain But hamne to type di hi nh ,
//     // ye contaxual value hai khud se ForEach loop variable ke Data Type infere kr raha hai,
//     // yahan pr Type batane ki need nh hai Based on Contaxt   
})

// map : same work as ForEach But isme element pr action performing ke bd new array main return hOga
let newFriends = friends.map((value) => {
    // console.log(value);
    return value.toUpperCase()
});
console.log(newFriends);

// Multiple Type : kisi array main Multiple Data Type store krni hoto usme ham Union Data Type use karenge
// Union Data Type :
// let arrMixed : string [] = ["Dinyal",  "Shahmeer", "Ubaid", 23, 45, 67]; || error
let arrMixed : (String | number) [] = ["Daniyal", "Arshad", "Umar", 90, 56, 68];
arrMixed.forEach((value)=>{
    // value.UpperCase() // Union Type main String ya number kisi ek ke method ko use nh kr skte iske lye Condition lagani hOgi
    if(typeof value == 'string'){
        console.log(value.toUpperCase());
    } if(typeof value == "number"){
        console.log(value.toFixed);
        
    }
})
console.log(arrMixed);
















