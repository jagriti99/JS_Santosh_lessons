const getSelectedCountry = () => {
<<<<<<< HEAD

=======
return document.querySelector("#countries-dropdown").value;
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
}

// Sample usage - do not modify
const dropdown = document.querySelector("#countries-dropdown");
dropdown.addEventListener("change", () => {
    console.log(getSelectedCountry());
});
