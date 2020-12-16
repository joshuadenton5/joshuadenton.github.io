function checkPage() {

    if (document.URL.includes("PersonalProjects")) {
        GetElements("Personal Projects");
    }
    else if (document.URL.includes("CV")) {
        GetElements("CV");
    }
    else if (document.URL.includes("Contact")) {
        GetElements("Contact");
    }
    else {
        GetElements("Home");
    }
}

function GetElements(s) {
    var elements = document.getElementsByClassName(s);
    changeStyle(elements);
}

function changeStyle(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "orange";
    }
}
checkPage();
