const sladerImages = document.querySelectorAll('.slider__image');

const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--prev');

let i = 5;

nextBtn.addEventListener('click', function () {

    i = Math.abs(i - 1);

    $(sladerImages[i]).fadeOut(2000);
    console.log(i);

    if(i == 0) {
        $(sladerImages).fadeIn(2000);
        i = 5;
    }
});

prevBtn.addEventListener('click', function () {

    i = i + 1;

    $(sladerImages[i]).fadeIn(2000);
    console.log(i);

    if(i > 3) {
        $(sladerImages).fadeOut(2000);
        i = -1;
    }
});