//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
/*
function celsiusToFahrenheit(tempCelsius){
  let tempFahrenheit = (tempCelsius*1.8) +32;
  let printTemperature = console.log("Temperature in Fahrenheit is",tempFahrenheit.toFixed(3));
  return printTemperature;
}
let temperatureInCelsius = prompt("Please Input Your Temperature In Celsius: ");
celsiusToFahrenheit(temperatureInCelsius)
*/
//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
/*
function fahrenheitToCelsius(tempFahrenheit){
  let tempCelsius = (tempFahrenheit-32)*.5556 ;
  let printTemperature = console.log("Temperature in Celsius is",tempCelsius.toFixed(3));
  return printTemperature;
}
let temperatureInFahrenheit = prompt("Please Input Your Temperature In Fahrenheit: ");;
fahrenheitToCelsius(temperatureInFahrenheit)
*/

//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
/*
 function grade(marks){
  let obtainedGrade;
   if (marks>=80 && marks <= 100){
    obtainedGrade = console.log("You Got A+") ///A+
   } else if(marks>=70 && marks < 80){
    obtainedGrade = console.log("You Got A")/// A 
   } else if(marks>=60 && marks < 70){
    obtainedGrade = console.log("You Got A-")/// A-
   } else if(marks>=50 && marks < 60){
    obtainedGrade = console.log("You Got B") /// B
   } else if(marks>=40 && marks < 50){
    obtainedGrade = console.log("You Got C") /// C
   } else if(marks>=33 && marks < 40){
    obtainedGrade = console.log("You Got D")/// D
   } else if (marks<33 && marks >=0){
    obtainedGrade = console.log("You Got F")/// F
  } else{
    obtainedGrade =console.log("Please input Your obtained Marks from 1 to 100")
  }
  return obtainedGrade;
 }
 let gotMarks = prompt("Please Input Your Obtained Marks: ");
 grade(gotMarks);

 */
//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function simpleInterest(principle, rateOfInterestInPercent, time){

  let interestRate = parseFloat(rateOfInterestInPercent/100);
  let totalAccruedAmount = console.log( principle + ((principle*time*interestRate)));
  return totalAccruedAmount;
}

let yourPrinciple = parseFloat(prompt("Please Input Your Principle: "));
let yourRateOfInterestInPercent = parseFloat(prompt("Please Input Rate Of Interest In Percent: "));
let loanTime = parseFloat(prompt("Please Input Your Time in year for loan or Lending Money: "));

// let yourPrinciple = 5000;
// let yourRateOfInterestInPercent = 20;
// let loanTime = 1;

simpleInterest(yourPrinciple,yourRateOfInterestInPercent,loanTime)