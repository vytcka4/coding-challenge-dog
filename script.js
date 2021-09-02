const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const chechDogs = function (juliaDogs, kateDogs) {
  const juliaDoges = julia;
  const kateDoges = kate;
  juliaDoges.splice(0, 1);
  juliaDoges.splice(2, 3);
  kateDoges.splice(0, 1);
  kateDoges.splice(2, 3);
  const allDogs = juliaDoges.concat(kateDoges);
  console.log(allDogs);
  console.log(juliaDoges.length);
  for (let i = 0; i < allDogs.length; i++) {
    if (allDogs[i] >= 3) {
      console.log(`"Dog number ${i + 1}
      is an adult, and is ${allDogs[i]} years old"`);
    } else console.log(`Dog number ${i + 1} is still puppy`);
  }
};
chechDogs(...julia, ...kate);
const ages = [5, 2, 4, 1, 15, 8, 3];

calcAverageHumanAge = function (ages) {
  const humanAge = (ages) =>
    ages
      .map((age) => {
        if (age <= 2) {
          2 * age;
        } else {
          16 + age * 4;
        }
      })
      .filter((age) => age > 18)
      .reduce((acc, i, age, arr) => {
        acc + age;
      }, 0);
  console.log(humanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

dogs.forEach((dog) => {
  if (dog.owners.includes("Sarah")) {
    if (dog.curFood > dog.recommendedFood * 1.1) {
      console.log(
        `${dog.owners[dog.owners.indexOf("Sarah")]} dog eats too much`
      );
    }
    if (dog.curFood < dog.recommendedFood * 0.9) {
      console.log(
        `${dog.owners[dog.owners.indexOf("Sarah")]} dog eats too little`
      );
    }
  }
});

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log(`${ownersEatTooMuch.join(" and ")}'s dog eats too much`);

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
console.log(
  dogs.some(
    (dog) =>
      dog.curFood >= dog.recommendedFood * 0.9 &&
      dog.curFood <= dog.recommendedFood * 1.1
  )
);
const okayFood = dogs.filter(
  (dog) =>
    dog.curFood >= dog.recommendedFood * 0.9 ||
    dog.curFood <= dog.recommendedFood * 1.1
);

console.log(okayFood);
