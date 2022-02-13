function addNumbers(num1,num2){
  console.log(arguments);
  const result = num1 + num2;
  return result;
}

const sum = addNumbers(23,13);
console.log(sum);
///
function getFullName(firstName, lastName){
  let fullName = "";
  for (const part of arguments){
    fullName = fullName + part + " ";
  }
  return fullName;
}

const name = getFullName("omuk","songket", "bin", "hanif", "Songket");
console.log(name);