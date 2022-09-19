class NameVariations {
  /** @param {string} name */
<<<<<<< HEAD
  constructor(name) {
    this.name = name;
  }

  getNumberOfChars() {
    // return the number of characters in: name
    return this.name.length;
  }

  getLower() {
    return this.name.toLowerCase();
=======
  constructor() {}

  getNumberOfChars() {
    // return the number of characters in: name
  }

  getLower() {
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
    // return name all in lower case (example: "ABC" becomes "abc")
  }

  getUpper() {
<<<<<<< HEAD
    return this.name.toUpperCase();
=======
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
    // return name all in upper case (example: "abc" becomes "ABC")
  }
}

//Sample usage do not modify (but feel free to read)
<<<<<<< HEAD
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
=======
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');

let name = document.querySelector('#your-name');

name.addEventListener('keyup', () => {
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
  let nameVariations = new NameVariations(name.value);

  // the try/catch statements are added to allow you and test
  // your code even before you have implemented all the instance methods
  try {
    answer1.textContent = nameVariations.getNumberOfChars();
  } catch (error) {
    console.log(error);
  }

  try {
    answer2.textContent = nameVariations.getLower();
  } catch (error) {
    console.log(error);
  }

  try {
    answer3.textContent = nameVariations.getUpper();
  } catch (error) {
    console.log(error);
  }
});
