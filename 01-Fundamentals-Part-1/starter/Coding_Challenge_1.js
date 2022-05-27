/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.*/

//DATA 1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log("Data #1");
console.log("Mark BMI is " + markBMI + " and Jhon BMI is " + johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//DATA 2

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log("Data #2");
console.log("Mark BMI is " + markBMI + " and Jhon BMI is " + johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
