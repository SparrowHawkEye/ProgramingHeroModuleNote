//take an integer and input and console the sum of the cube of all the numbers from 1 to the input integer

function cubeSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}
console.log(cubeSum(12));
