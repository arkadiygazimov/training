$(document).ready(function () {
    $('.sslider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        speed: 1000

        });

    $('.sslider').on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

});