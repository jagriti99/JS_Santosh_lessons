<<<<<<< HEAD
"use strict";
=======
'use strict';
>>>>>>> 95c158372879d20d0ab673503efa97684429676b

/**
Complete the renderShoppingList function such that it renders an <li> element
for every item in the items array it receives.
Also, the order of the items should be the same as the one in the array.
So, the first item should show up first (at the top).


/**
 * @param {string[]} items
 */
<<<<<<< HEAD
const itemList = document.querySelector("#shopping-list");
const renderShoppingList = (items) => {
  for (const item of items) {
    itemList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  }
};
=======
const renderShoppingList = items => {

}
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
console.log(renderShoppingList(sampleList));
