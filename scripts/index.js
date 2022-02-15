var button = document.querySelector(".mobile_button");
var menu = document.querySelector("ul");
var open = false;
button.addEventListener("click", function () {
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
