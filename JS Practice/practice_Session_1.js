var age = 23;
var vaccineCount = 1;
var isVaccinated = false;

if ( age>20 && vaccineCount == 2) {
    console.log("You are eligible for travel");
} 

if( age>15 && age<=20 && vaccineCount == 0) {
    console.log("A message to get you vaccine");
}

if( age>15 && age<=20 && vaccineCount == 2) {
    isVaccinated = true;
    console.log("Your 2 dose of vaccine is completed");
}

var budget = 6000;

if (budget > 5000){
    console.log("You are eligible for tour");
    var hotelRent = 4000;
    var extraMoney = budget - hotelRent;
    if(extraMoney> 2000){
      console.log ("We are going to have a BBQ Party");
    } else{
      console.log("We are going to do a small shopping");
    }
} else {
 console.log("You are not eligible for tour. Let's Sleep");
}