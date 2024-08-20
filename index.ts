import inquirer from "inquirer";
const asnwer= await inquirer.prompt([
    { massage:"Enter firstnumber",type:"Number",name:"firstnumber"},
    {massage:"Enter secondnumber", type:"Number",name:"secondnumber"},
    
       { massage: "Selet one of the operators to perform operation",
        type:"list",
        name:"operator",
     choices:[ "Subtraction", "Multipilication" , "Division", "ADDITION" ],}
] );
  if (asnwer.operator === "Addition" )
  
   { console.log(asnwer.firstnumber + asnwer.secondnumber);}

  else if (asnwer.operator === "Subtraction" )
   
   { console.log(asnwer.firstnumber - asnwer.secondnumber);}

   else if(asnwer.operator === "Multipilication")
   
  { console.log(asnwer.firstnumber * asnwer.secondnumber);}

   else if(asnwer.operator === "Division")
   
    {console.log(asnwer.firstnumber / asnwer.secondnumber);}

    else{
        console.log("please select valide operator");}

