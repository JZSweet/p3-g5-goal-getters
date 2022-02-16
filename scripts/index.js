// humburger menu
var button = document.querySelector(".hamburgerMenu");
var menu = document.querySelector("nav");
var open = false;
button.addEventListener("click", function() {
    if (open) {
        ("if the menu is closed, then open it");
        menu.style.display = "none";
        open = false;
    } else {
        ("if the menu is open, then close it");
        menu.style.display = "inline-block";
        open = true;
    }
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};