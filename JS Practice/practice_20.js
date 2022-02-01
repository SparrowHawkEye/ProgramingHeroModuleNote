// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।



// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

/* 
function checkEvenOdd(number){
  let result;
  if (number%2 == 0){
    result = console.log(number, "is an Even Number");
  } else{
    result = console.log(number, "is an Odd Number");
  }
  return result;
}

let yourGivenNumber = 123;
checkEvenOdd(yourGivenNumber);
 */

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

/*
function hourToMinutes(hour){
 let minutes = console.log(hour * 60);
 return minutes;
}

let yourTimeInHour = 12;
hourToMinutes(yourTimeInHour)
*/