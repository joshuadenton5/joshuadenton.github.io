
function checkPage() {
    if (document.URL.includes("PersonalProjects")) {
        var element = document.getElementById("PP");
        changeStyle(element);
    }
}

function changeStyle(element) {
    element.style.color = "orange";
    element.style.fontWeight = "bold";
}
window.onload = checkPage;