$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggles navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // owl carousel 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 3000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }

    });

    //typed sript
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "App Developer", "Gamer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "App Developer", "Gamer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

})