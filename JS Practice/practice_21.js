//১. একটি কোড লিখ যেটা দিয়ে একটি array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

//২. একটি কোড লিখ যেটা দিয়ে তিনটি সংখ্যা এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

//৩.  একটি ফাংশন লিখ সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটি array নিবে। সেই array এর মধ্যে অনেকগুলো সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলো সংখ্যা আছে তাদের গড় বের করবে। তারপর সেই ফাংশনের return হিসেবে দিয়ে দিবে।

let array = [23, 26, 28];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// function average(array) {}
// let givenArray = [23, 26, 28];
// average(givenArray);
//৪. একটি ফাংশন লিখ সেই ফাংশনের ইনপুট parameter হিসেবে একটি আয়তক্ষেত্রের দৈঘ্য আর উচ্চতা নিবে। তারপর সেই আয়তক্ষেত্রের ক্ষেত্রফল রেজাল্ট হিসেবে return করবে।
/* 
function areaOfRectangle(length, width) {
  let area;
  if (typeof length != "number" || length < 0) {
    return "Please Input valid length.";
  } else if (typeof width != "number" || width < 0) {
    return "Please Input valid Width.";
  } else {
    area = length * width;
  }
  return area;
}
let givenLength = 204;
let givenWidth = 41;
console.log(areaOfRectangle(givenLength, givenWidth));
 */
//৫. কোন একটি  array এর মধ্যে  অনেকগুলো সংখ্যা বের করার একটা program লিখ।
