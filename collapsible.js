function collapse(name) {
    var collapsible = document.getElementById(name);
    collapsible.classList.toggle("active");
    var content = collapsible.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    }
}