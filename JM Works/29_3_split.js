const anthem= "amar shonar bangla ami tomai valobashi";
const words = anthem.split(' ');
console.log(words);

const smallSlice = anthem.slice(5, 18)
console.log(smallSlice);

//  substr

const anotherPart = anthem.substr(5,6)
console.log(anotherPart);
// substring
const anotherAnotherPart = anthem.substring(11,15);
console.log(anotherAnotherPart);

// concat

const first = "Amader";
const second = "City";
// const fullString = first + second;
const fullString = first.concat(second);
console.log(fullString);

//join

// const words2 = ["a", "b", "c", "d"];
// const allJoined = words2.join("");
// console.log(allJoined);

const words2 = ["alim", "badhon", "cameron", "david"];
const allJoined = words2.join(", ");
console.log(allJoined);