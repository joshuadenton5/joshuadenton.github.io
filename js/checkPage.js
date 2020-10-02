function checkPage() {
    if (document.URL.includes("personalprojects")) {
        var element = document.getElementById("Personal Projects");
        changeStyle(element);
    }
    else if (document.URL.includes("CV")) {
        var element = document.getElementById("CV");
        changeStyle(element);
    }
    else {
        var element = document.getElementById("Home");
        changeStyle(element);
    }
}
function changeStyle(element) {
    element.style.color = "orange";
    element.style.fontWeight = "bold";
}
addLoadEvent(checkPage);
