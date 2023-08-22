// JavaScript para alternar o menu de navegação móvel
document.addEventListener("DOMContentLoaded", function() {
    var navIcon = document.getElementById("nav-icon");
    var navCel = document.getElementById("nav-cel");
    navIcon.addEventListener("click", function() {
        navCel.classList.toggle("active");
    });
});
