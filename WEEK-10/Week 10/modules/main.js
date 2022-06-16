const { sum, subs } = require("./operations");

let num1 = 0.5;
let num2 = 0.5;
const Total = sum(num1, num2);

num2 = subs(Total, num1);
num2 = subs(Total, num2);

console.log(Total)
console.log(num2)