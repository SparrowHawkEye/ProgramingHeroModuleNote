const numbers = [4,7,1,3,9,2,5];
const sortedNumbers =numbers.sort();
// console.log(sortedNumbers);
// console.log(numbers.reverse());

const friends =["kabil","josim", "badsha","razzak", "anwar", "deepjol"]
// console.log(friends.sort());
// console.log(friends.reverse());
// console.log(friends.sort().reverse());

// number sorting fun

const bigNumbers = [66,58,81,92,9,6,37,13,2]
const sortedBigNumbers = bigNumbers.sort(function(a,b){
  return a-b;
})
console.log(sortedBigNumbers);