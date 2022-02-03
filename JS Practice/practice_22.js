// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

function areaOfTriangle(side1, side2, side3) {
  if (
    typeof side1 != "number" ||
    typeof side2 != "number" ||
    typeof side3 != "number" ||
    side1 < 0 ||
    side2 < 0 ||
    side3 < 0
  ) {
    return "Please Input a valid length of triangles";
  } else {
    if (
      side1 + side2 < side3 ||
      side2 + side3 < side1 ||
      side3 + side1 < side2
    ) {
      return "Triangle is Impossible. See the Triangle Inequality Theorem.";
    } else {
      const semiPerimeter = (side1 + side2 + side3) / 2;

      const area = Math.sqrt(
        semiPerimeter *
          ((semiPerimeter - side1) *
            (semiPerimeter - side2) *
            (semiPerimeter - side3))
      );
      return parseFloat(area.toFixed(3));
    }
  }
}
const givenSide1 = 20;
const givenSide2 = 26;
const givenSide3 = 40;
const triangleArea = console.log(
  areaOfTriangle(givenSide1, givenSide2, givenSide3)
);

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

/* 
 function checkPrimeNumber(number){
   if(number<2){
     return false;
   }else if(number==2){
     return true;
   }else{
     for(let i=2; i<number; i++){
       if(number%i==0){
         return false;
       }
     }
     return true;
   }
 }
  const primeNumber = checkPrimeNumber(15);
  console.log(primeNumber) */
