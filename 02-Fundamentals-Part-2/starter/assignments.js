"use strict";
//FUNCTIONS
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const mexico = describeCountry("Mexico", 128.9, "CDMX");
const canada = describeCountry("Canada", 30.8, "Ottawa");
const japon = describeCountry("Japon", 125.8, "Tokyo");
console.log(mexico);
console.log(canada);
console.log(japon);
