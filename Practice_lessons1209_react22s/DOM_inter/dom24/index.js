// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'



document.querySelector("#menu-sidebar").addEventListener("click", event => {
    document.querySelector("#app-sidebar").classList.toggle('show');
});