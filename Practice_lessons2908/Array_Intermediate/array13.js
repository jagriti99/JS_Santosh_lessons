'use strict';

/**
Complete the function getFreezingTemperatures such that it returns an array containing
the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getFreezingTemperatures(temperatures) {
let freeze = temperatures.filter(function(temp){
    return temp<0;
});
return freeze;
}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [12, 3]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
