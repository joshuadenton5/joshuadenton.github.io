function ChangeNavState() {

    var e = document.getElementById("linksMenu");
    var test = document.getElementById("linksCon");

    var elements = [e, test];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "block")
            elements[i].style.display = "none";
        else
            elements[i].style.display = "block";
    }   
}