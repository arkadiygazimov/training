//-------------------------- First Slider

$('.owl-carousel2').owlCarousel({
    loop:true,
    nav:false,
    dotsEach:1/true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var owl = $('.owl-carousel2');

owl.on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
    owl.trigger('next.owl');
} else {
    owl.trigger('prev.owl');
}
e.preventDefault();
});

//----------------------------------- Second Slider

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

//------------------------------------- Dinamic Numbers

// number 1

let number1 = document.querySelector('.number1'),
numberTop1 = number1.getBoundingClientRect().top,
start1 = +number1.innerHTML;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop1 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval1 = setInterval(function() {
            number1.innerHTML = ++start1*5;
            if(start1 === 100) {
                clearInterval(interval1);
            }
        }, 20);
    }
});

// number 2

let number2 = document.querySelector('.number2'),
numberTop2 = number2.getBoundingClientRect().top,
start2 = +number2.innerHTML;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop2 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval2 = setInterval(function() {
            number2.innerHTML = ++start2*5;
            if(start2 === 200) {
                clearInterval(interval2);
            }
        }, 10);
    }
});

// number 3

let number3 = document.querySelector('.number3'),
numberTop3 = number3.getBoundingClientRect().top,
start3 = +number3.innerHTML;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop3 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval3 = setInterval(function() {
            number3.innerHTML = ++start3;
            if(start3 === 50) {
                clearInterval(interval3);
            }
        }, 40);
    }
});

// number 4

let number4 = document.querySelector('.number4'),
numberTop4 = number4.getBoundingClientRect().top,
start4 = +number4.innerHTML;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop4 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval4 = setInterval(function() {
            number4.innerHTML = ++start4*5;
            if(start4 === 100) {
                clearInterval(interval4);
            }
        }, 20);
    }
});

//----------- view oll buttons

// pricing

$(document).ready( function() {
    $('.pricing__button').click(function(event) {
        $('.plan--hidden').toggleClass('active');
    });
});

// chouse

$(document).ready( function() {
    $('.choose__button').click(function(event) {
        $('.choose__content--hidden').toggleClass('active');
    });
});

// blog

$(document).ready( function() {
    $('.blog__button').click(function(event) {
        $('.blog__content--hidden').toggleClass('active');
    });
});