// Making a function that takes a string and returns the string in reverse

const greetings = "Hello, How are you?";

function reverseString(text){
  let reverse = "";
  for (const letter of text) {
    // console.log(letter);
    reverse = letter + reverse;
  }
  return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);