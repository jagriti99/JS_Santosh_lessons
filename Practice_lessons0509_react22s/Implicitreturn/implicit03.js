'use strict';

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
// function getPositiveTemperatures () {

// }
const getPositiveTemperatures = (temp) => temp > 0;

// Sample usage - do not modify
console.log(getPositiveTemperatures(-2)); // 8
console.log(getPositiveTemperatures(3, 3)); // 9

const getPositiveTemperatures1 = (temps) => temps.filter((temp)=> temp >0); 