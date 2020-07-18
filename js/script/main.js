$(document).ready(function() {

    //всплывающее меню
    $('.header-nav-btn__menu').click(function(event) {
        $('.header-nav-btn__menu,.header-nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-nav-menu-list').click(function(event){
        $('.header-nav-btn__menu,.header-nav-menu').removeClass('active');
        $('body').removeClass('lock')
    });

    

    //слайдер
    $('.slide-people').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
        
});

$(window).resize(function(){
    if ( $(window).width() < 770 ) {
        //спойлеры в подвале
        $('.footer-body-right-title').click(function(event){
            if($('.footer-body-right-row').hasClass('one')){
                $('.footer-body-right-title').not(this).removeClass('active__list');
                $('.footer-body-right-list').not($(this).next()).slideUp(300);
            }
            $(this).toggleClass('active__list').next().slideToggle(300);
        });
    }
});