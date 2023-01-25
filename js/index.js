const nav = document.querySelector("#nav-links");
const openNav = document.querySelector("#bar");
const closeNav = document.querySelector("#close");

openNav.addEventListener("click", function () {
    nav.style.top = "0";
})

closeNav.addEventListener("click", function () {
    nav.style.top = "-500px";
})