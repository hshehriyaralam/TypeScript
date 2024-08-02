// Union Types 
// jab hamien multiple Data type store krna ho to
// Union main 2 ya 2 zyada Type kr sakte hain


// store  userId
let userId : (string | number | boolean) = "ghtyvun56nuu9771"
userId = 892364682563;
userId = "89542bkcgoigst9fweby"
userId = 7984375634
userId = true

// Display and return userId
function Display(userId : (string | number | boolean) ) : (string | number | boolean)  {
    console.log("User Id is " + userId);
    return userId
    
}


/* 
************************************** Summary **************************************
01) Multiple Type assign is called Union Type
02) Union Type method use only combined method
03) Parameters allow to union type 




*/