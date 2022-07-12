$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:88,
    dotsEach:2/true,
    responsive:{
        0:{
            margin:15,
            items:2
        },
        400:{
            margin:30,
            items:3
        },
        600:{
            margin:50,
            items:4
        },
        1000:{
            margin:88,
            items:5
        }
    }
})

var owl = $('.owl-carousel');

owl.on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
    owl.trigger('next.owl');
} else {
    owl.trigger('prev.owl');
}
e.preventDefault();
});