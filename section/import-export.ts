// export function greet(name: string = 'Mundo') {
//     console.log('Hola ' + name)
// }

// let firstName = 'Nicolas';
// greet(firstName);

import { addTwoNumbers, divideTwoNumbers, substractTwoNumbers, timesTwoNumbers } from "../helpers/math-helpers";

let num1: number = 13;
let num2: number = 7;

let totalAdd: number = addTwoNumbers(num1, num2);
let totalSubstract: number = substractTwoNumbers(num1, num2);
let totalTimes: number = timesTwoNumbers(num1, num2);
let totalDivide: number = divideTwoNumbers(num1, num2);

console.log('Add: ' + totalAdd)
console.log('Substract: ' + totalSubstract)
console.log('Times: ' + totalTimes)
console.log('Divide: ' + totalDivide)