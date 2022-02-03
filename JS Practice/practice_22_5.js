// ০. রিকার্সন বুঝলে চমৎকার। আর না বুঝলে আপাতত রিকার্সন না বুঝলে সেটাকে সাইডে রেখে দাও। শুধু মাথায় রাখো রিকার্সন নামে একটা জিনিস আছে। সেটা একটা ফাংশনকে নিজের ভিতর থেকে কল করে।

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

/* 
function feetToInch(feet) {
  let result = feet / 12;
  let inch = console.log(parseFloat(result.toFixed(3)));
  return inch;
}
let givenFeet = 1;
feetToInch(givenFeet);
 */

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

/* 
function centimeterToMeter(centimeter) {
  let result = centimeter / 100;
  let meter = console.log(parseFloat(result.toFixed(3)));
  return meter;
}
let givenCentimeter = 1000;
centimeterToMeter(givenCentimeter);

 */

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(firstBookQty, secondBookQty, thirdBookQty){

 let pageRequired1stBook = 100;
 let pageRequired2ndBook = 200;
 let pageRequired3rdBook = 300;
 let totalPageRequired = (pageRequired1stBook * firstBookQty) +(pageRequired2ndBook * secondBookQty)+ (pageRequired3rdBook * thirdBookQty);
 
 return (console.log(`Total page Required for printing is ${totalPageRequired}`));

}

let givenFirstBookQty = 5;
let givenSecondBookQty = 30;
let givenThirdBookQty = 2;

paperRequirements(givenFirstBookQty,givenSecondBookQty,givenThirdBookQty)

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
/* 
function bestFriend(friendsArray) {
  let friendsNameLength = [];
  for (const friend of friendsArray) {
    let friendName = friend;
    friendsNameLength.push(friendName.length);
  }
}

let givenFriendsName = [
  "Reaz",
  "Mohsin",
  "Al-amin",
  "Atiq",
  "Zobayer Sharif",
  "Ashiq",
  "Ratul",
  "Raihan",
  "Jaf Rasel",
];
bestFriend(givenFriendsName);

NOT COMPLETE

 */
// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
/* 
function absArray(array) {
  let printArray = [];
  for (let j = 0; j < array.length; j++)
    if (array[j] < 0) {
      return console.log(printArray);
    } else {
      let number = array[j];
      printArray.push(number);
    }
}

let givenArray = [
  50, 150, 240, 360, 840, 50, 60, 30, 80, 90, 100, 200, -300, -20,
];

absArray(givenArray);
 */