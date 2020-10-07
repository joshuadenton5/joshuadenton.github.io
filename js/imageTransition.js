var i = 0;
var images = [];
var time = 3000;

images[0] = '/images/tf_1.jpg';
images[1] = '/images/track.jpg';
images[2] = '/images/bd_2.jpg';
images[3] = '/images/ani_1.jpg';
images[4] = '/images/tf_2.jpg';

function changeImg() {
    var sl = document.getElementById("slide");
    sl.src = images[i];
	if (i < images.length - 1) {
		i++;
	} else
		i = 0;;
	setTimeout("changeImg()", time);
}
addLoadEvent(changeImg);