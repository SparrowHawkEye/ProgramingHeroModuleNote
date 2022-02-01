// calculate the number of animals in forest for a given number of miles traveled

function animalCount(miles){
  const animalDensityFirstTenMile = 10;
  const animalDensitySecondTenMile = 50;
  const animalDensityRestMiles = 100;
  if (miles<=10){
    const count = miles*animalDensityFirstTenMile;
    return count;
  }  else if(miles <= 20){
    const firstDenseAnimals = 10* animalDensityFirstTenMile;
    const restMiles = miles - 10;
    const secondDenseAnimals = restMiles*animalDensitySecondTenMile;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals;
    return totalAnimals;
  }else{
    const firstDenseAnimals = 10* animalDensityFirstTenMile;
    const secondDenseAnimals = 10* animalDensitySecondTenMile;
    const restMiles = miles - 20;
    const restDenseAnimals = restMiles*animalDensityRestMiles;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
    return totalAnimals;
  }
}
const animals = animalCount(35);
console.log(animals)