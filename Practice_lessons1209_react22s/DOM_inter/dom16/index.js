const getUserName = () => {
<<<<<<< HEAD
=======
return document.querySelector("#user-name").value;
>>>>>>> 95c158372879d20d0ab673503efa97684429676b

}

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", event => {
    event.preventDefault();
    console.log(getUserName());
});
