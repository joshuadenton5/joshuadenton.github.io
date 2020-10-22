
var arrowsRight = document.querySelectorAll('#arrow-right');
var arrowsLeft = document.querySelectorAll('#arrow-left');

var current = new Array(GetSliders().length);
for (var i = 0; i < current.length; i++) {
    current[i] = 0;
}

function GetSliders() {
    var noOfSliders = document.querySelectorAll('.slider-container');
    return noOfSliders;
}

function reset(sliderImages) {

    //var parents = document.getElementsByClassName('slider-container');
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function slideLeft(sliderImages, i) {
    reset(sliderImages);
    sliderImages[current[i] - 1].style.display = 'block';
    current[i]--;
}
function slideRight(sliderImages, i) {
    reset(sliderImages);
    sliderImages[current[i] + 1].style.display = 'block';
    current[i]++;
}



for (var i = 0; i < arrowsRight.length; i++)
{
    (function (index) {
        arrowsRight[index].addEventListener('click', function () {
            var test = GetSliders()[index];
            var imgs = test.querySelectorAll('.slide');
            if (current[index] === imgs.length - 1) {
                current[index] = -1;
            }
            slideRight(imgs, index);
        });
    })(i)
}


for (var i = 0; i < arrowsLeft.length; i++)
{
    (function (index)
    {
        arrowsLeft[index].addEventListener('click', function () {
            var test = GetSliders()[index];
            var imgs = test.querySelectorAll('.slide');
            if (current[index] === 0) {
                current[index] = imgs.length;
            }
            slideLeft(imgs, index);
        });
    })(i)
    
}

function startSlides() {
    for (var i = 0; i < GetSliders().length; i++) {
        var test = GetSliders();
        let imgs = test[i].querySelectorAll('.slide');
        reset(imgs);
        imgs[0].style.display = 'block';
    }
}
startSlides();
