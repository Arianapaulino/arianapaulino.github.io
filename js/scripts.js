// Ariana Paulino - Week 3 Portfolio
// This file controls the mobile menu and closes it after a link is selected.

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
});
