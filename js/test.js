
function checkPage() {
    if (document.URL.includes("PersonalProjects")) {
        var element = document.getElementById("PP");
        element.style.fontWeight = "bold";
        changeCol(element);
    }
}

function changeCol(element) {
    element.style.color = "orange";
}
window.onload = checkPage;