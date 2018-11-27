$(function() {
    $(".tabs").tabs();

    $( '.portfolio-tab' ).tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1
    })

    (function () {
        // .header-nav навигация
        let nav = $('.header-nav');

        // .menu-btn - кнопка меню
        $('.menu-btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());
});