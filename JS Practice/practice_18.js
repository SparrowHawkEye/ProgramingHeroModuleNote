///Friends Grade

let friends =["Alia", "Dalia", "Salia", "Malia", "Lilia", "Jalia"];
let marks = [95,66,80,59,47,77];

for(let i=0; i<friends.length; i++){
if(marks[i]>=90){
  console.log(`${friends[0]} got A+`);
} else if(marks[i]<90 && marks[i]>=80){
  console.log(`${friends[2]} got A`);
} else if(marks[i]<80 && marks[i]>=70){
  console.log(`${friends[5]} got B`);
} else if(marks[i]<70 && marks[i]>=60){
  console.log(`${friends[1]} got C`);
} else if(marks[i]<60 && marks[i]>=50){
  console.log(`${friends[3]} got D`);
} else {
  console.log(`${friends[4]} got F`);
}
}

/// Road Crossing
/*
var getSignal = prompt("Enter the signal color")
var signal = getSignal.toLowerCase();

if (signal === "red") {
  console.log("Danger! Stop!");
} else if (signal === "yellow") {
  console.log("Be Ready to move");
} else if (signal === "green") {
  console.log("Start crossing the road");
} else {
  console.log("Invalid signal");
}
*/