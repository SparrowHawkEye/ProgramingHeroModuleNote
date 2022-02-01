/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/
// Create a function that takes in three parameters. The first parameter will be the number of chairs. The second parameter will be the number of tables. The third parameter will be the number of beds. The function should return the total number of wood. The total number of wood should be the sum of the number of chairs multiplied by 3, the number of tables multiplied by 10, and the number of beds multiplied by 50.

function woodCalculator(chair, table, bed) {
 const perChairWood = 3;
 const perTableWood = 10;
 const perBedWood = 50;

  const totalChairWood = chair * perChairWood;
  const totalTableWood = table * perTableWood;
  const totalBedWood = bed * perBedWood;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);