let menu = document.getElementById("menu")
let hamburger = document.getElementById("ham")
let fullNavbar = document.getElementById("navbar")
menu.classList.add("hidden")

hamburger.addEventListener('click', event => {
    if(menu.classList.contains("hidden")){
        menu.classList.replace("hidden", "show")
        menu.classList.add("fadeIn")
    }
})
menu.addEventListener('mouseleave', event => {
    if(menu.classList.contains("show")){
        menu.classList.replace("show", "hidden")
        menu.classList.remove("fadeIn")
        menu.classList.add("fadeOut")
    }
})

let form = document.getElementById("form");
let submit = document.getElementById("submit");
let nameInput = form.firstElementChild;

submit.addEventListener('click', event => {
    nameInput.value = "";
    nameInput.nextElementSibling.value = "";
    nameInput.nextElementSibling.nextElementSibling.value = ""
    nameInput.nextElementSibling.nextElementSibling.nextElementSibling.value = ""
});