
function checkPage() {

    if (document.URL.includes("PersonalProjects")) {
        var element = document.getElementById("PP");
        element.style.fontWeight = "bold";
    }
}
window.onload = checkPage;