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