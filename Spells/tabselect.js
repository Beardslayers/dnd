function openLevel(evt, spell_level) {
    if (evt.currentTarget.className.includes("active")) {
        return;
    }
    var buttons = document.getElementsByClassName("spell_tab");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

    var content = document.getElementsByClassName("spell_level_table");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(spell_level).style.display = "";
}