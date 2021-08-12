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
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  console.log(humanAge);
  const humanAgeFiltered = humanAge.filter((age) => age > 18);
  console.log(humanAgeFiltered);
  const average =
    humanAgeFiltered.reduce(function (acc, age) {
      return acc + age;
    }, 0) / humanAgeFiltered.length;
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
