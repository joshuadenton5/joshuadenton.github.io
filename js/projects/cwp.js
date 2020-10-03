var i = 0;
var images = [];
var time = 4000;

images[0] = '/images/CWP/cookingWithPolysLogo.jpg';
images[1] = '/images/CWP/inGameShot.jpg';
images[2] = '/images/CWP/inGameShot_2.jpg';
images[3] = '/images/CWP/mainMenu.jpg';


function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else
        i = 0;;
    setTimeout("changeImg()", time);
}
addLoadEvent(changeImg);