function megaFriend(friends){
  if(Array.isArray(friends) == false){
    return "please provide an array";
  }
  let mega = friends[0];
  for(const friend of friends){
    if(friend.length > mega.length){
      mega = friend;
    }
  }
  return mega;
}

const friends =["kutub","lion", "shamol", "sabbir"];
console.log(megaFriend(friends));

if (friends.indexOf("lion") != -1){
  console.log("lion exists");
}

if(friends.includes("lion")){
  console.log("Lion exists using includes");
}