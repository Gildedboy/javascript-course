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
console.log("9" - "5"); // 4 - Number
console.log("19" - "13" + "17"); // 617 - String
console.log("19" - "13" + 17); // 23 - Number
console.log("123" < 57); // False - Boolean
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143 - Number

//LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(
  prompt(`How many neighbour countries does your country 
have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
