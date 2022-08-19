// Iteration 1: Names and Input
const hacker1 = "Anna";
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Júlia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let newStr = "";
for (let i = 0; i < hacker1.length; i++) {
  const element = hacker1[i].toUpperCase();
  newStr += element + " ";
  console.log(newStr);
}
//3.2
const str = hacker1;
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
//3.3
let result = hacker2.localeCompare(hacker1);
if (result === 0) {
    console.log("What?! You both have the same name?");
} else if (result === 1) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }