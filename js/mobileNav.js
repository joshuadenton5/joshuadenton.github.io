function ChangeNavState() {
    var e = document.getElementById("linksMenu");
    if (e.style.display === "block") {
        e.style = "none";
    }
    else {
        e.style.display = "block";
    }
}