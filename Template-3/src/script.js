//---------- burger

const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function () {

    const burgerActive = document.querySelector('.header__burger');
    const headerNavActive = document.querySelector('.header__nav');
    const navBg = document.querySelector('.nav-bg');

    burgerActive.classList.toggle('active');
    headerNavActive.classList.toggle('active');
    navBg.classList.toggle('active');
}, false);


//---------youtube video
let tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '_6Xa4f6Izh4',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

let p = document.getElementById ("player");
$(p).hide();

let t = document.getElementById ("thumbnail");
t.src = "img/promo-video.png";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

// footer

const navContact = document.getElementById('contact');

navContact.addEventListener('click', function () {

    const navTitleContact = document.getElementById('contact');
    const navItemsContact = document.querySelectorAll('.nav-box__item--contact');

    navTitleContact.classList.toggle('active');
    
    for(let i = 0;i < navItemsContact.length; i++) {
        navItemsContact[i].classList.toggle('active');
    }
}, false);

//-----

const navLinks = document.getElementById('links');

navLinks.addEventListener('click', function () {

    const navTitleLinks = document.getElementById('links');
    const navItemsLinks = document.querySelectorAll('.nav-box__item--links');

    navTitleLinks.classList.toggle('active');
    
    for(let i = 0;i < navItemsLinks.length; i++) {
        navItemsLinks[i].classList.toggle('active');
    }
}, false);

//-----

const navProjects = document.getElementById('projects');

navProjects.addEventListener('click', function () {

    const navTitleProjects = document.getElementById('projects');
    const navItemsProjects = document.querySelectorAll('.nav-box__item--projects');

    navTitleProjects.classList.toggle('active');
    
    for(let i = 0;i < navItemsProjects.length; i++) {
        navItemsProjects[i].classList.toggle('active');
    }
}, false);

//-----

const navSocial = document.getElementById('social');

navSocial.addEventListener('click', function () {

    const navTitleSocial = document.getElementById('social');
    const navItemsSocial = document.querySelectorAll('.nav-box__item--social');

    navTitleSocial.classList.toggle('active');
    
    for(let i = 0;i < navItemsSocial.length; i++) {
        navItemsSocial[i].classList.toggle('active');
    }
}, false);

//--------------


const scrollTop = document.querySelector('.scroll-arrow');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 500) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
  });

scrollTop.addEventListener('click', function() {

    $('html').animate(

        { scrollTop: 0 }, 
        { duration: 500 }
    );
});