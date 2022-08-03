let scrollLine = -750;

const sliderLine = document.querySelector('.slider__line');
const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--prev');

prevBtn.addEventListener('click', function() {


if(scrollLine > 0) {

    scrollLine = scrollLine - 750;
    sliderLine.style.left = -scrollLine + 'px';
    } else {
        scrollLine = 3000;
        sliderLine.style.left = -scrollLine + 'px';
    }

});

nextBtn.addEventListener('click', function() {

    if(scrollLine < 3000) {

    scrollLine = scrollLine + 750;
    sliderLine.style.left = -scrollLine + 'px';
    } else {
        scrollLine = 0;
        sliderLine.style.left = -scrollLine + 'px';
    }
});