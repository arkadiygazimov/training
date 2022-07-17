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

function dinamicNumbers() {

    const time = 100;
    const step1 = 10;
    const step2 = 50;
    const step3 = 1;
    const step4 = 10;

    function outNum1(num, elem) {
        let l = document.querySelector('#' + elem);
        n = 0;
        let t = Math.round(time / (time / step1));
        let interval = setInterval(() => {
            n = n + step1;
            if (n === num) {
                clearInterval(interval);
            }
            l.innerHTML = n;
        },
        t)
    }

    outNum1(500, 'out-1');

    function outNum2(num, elem) {
        let l2 = document.querySelector('#' + elem);
        n2 = 0;
        let t2 = Math.round(time / (time / step2));
        let interval = setInterval(() => {
            n2 = n2 + step2;
            if (n2 === num) {
                clearInterval(interval);
            }
            l2.innerHTML = n2;
        },
        t2)
    }

    outNum2(1000, 'out-2');

    function outNum3(num, elem) {
        let l3 = document.querySelector('#' + elem);
        n3 = 0;
        let t3 = Math.round(time / (time / step3));
        let interval = setInterval(() => {
            n3 = n3 + step3;
            if (n3 === num) {
                clearInterval(interval);
            }
            l3.innerHTML = n3;
        },
        t3)
    }

    outNum3(50, 'out-3');

    function outNum4(num, elem) {
        let l4 = document.querySelector('#' + elem);
        n4 = 0;
        let t4 = Math.round(time / (time / step4));
        let interval = setInterval(() => {
            n4 = n4 + step4;
            if (n4 === num) {
                clearInterval(interval);
            }
            l4.innerHTML = n4;
        },
        t4)
    }

    outNum4(500, 'out-4');

}

dinamicNumbers();