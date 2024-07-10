document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#555";
        } else {
            nav.style.backgroundColor = "#333";
        }
    });
});
