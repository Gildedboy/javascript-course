//LECTURE: Values and Variables
const country = "Mexico";
const continent = "America";
let population = 128.9;
console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

//LECTURE: let const and var
language = "Spanish";

//LECTURE: Basic Operators
//1.-
console.log(population);
const halfPopulation = population / 2;
console.log(halfPopulation);
//2.-
console.log((population += 1));
//3.-
const finlandPopulation = 6;
console.log(population > finlandPopulation);
//4.-
const averagePopulation = 33;
console.log(population < averagePopulation);
//5.-
const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description);
//LECTURE: Strings and Template Literals

const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(descriptionNew);

//LECTURE: If-Else statements

if (population > 33) {
  console.log(`${country} population is above average.`);
} else {
  console.log(
    `${country} population is ${33 - population} million below average`
  );
}

//LECTURE: Type Conversion and Coercion
