//slice of array
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// const numberSliced = numbers.slice(4,8)
// console.log(numberSliced);

// console.log(numbers);

// splice of array
const numberSpliced = numbers.splice(4,3, 34, 42, 78, 99)
console.log(numberSpliced);
console.log(numbers);