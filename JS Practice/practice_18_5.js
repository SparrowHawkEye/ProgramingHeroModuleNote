let works = ["module Unlock", "video practice", "taking notes", "self practice","join support Session"];
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
while(j<10){
  while (i<works.length){
    console.log(`${order}. ${works[i]}`);
    order++;
    i++;
  }
  i=0
  order=1
  j++;
  console.log(`----------------`);
}
