let works = [
  "module Unlock",
  "video practice",
  "taking notes",
  "self practice",
  "join support Session",
];
/*

// fop loop
for (let j=0; j<10; j++){
  let order = 1;
for(let i = 0; i < works.length; i++){
    console.log(`${order}. ${works[i]}`);
    order++;
    
}
console.log(`----------------`);
}
*/

// while loop
let order = 1;
let i = 0;
let j = 0;
while (j < 10) {
  while (i < works.length) {
    console.log(`${order}. ${works[i]}`);
    order++;
    i++;
  }
  i = 0;
  order = 1;
  j++;
  console.log(`----------------`);
}

// burhan python solution
/*
var daliyworks = [
  "mouse",
  "keyboard",
  "monitor",
  "speakers",
  "motherboard",
  "processor",
];

var i = 1;
while (i <= 10) {
  for (var x = 0; x < daliyworks.length; x++) {
    console.log(daliyworks[x]);
  }
  i++;
}
*/
