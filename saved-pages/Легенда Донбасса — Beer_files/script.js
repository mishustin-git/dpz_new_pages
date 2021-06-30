if (window.sessionStorage && window.localStorage) {
    //объекты sessionStorage и localtorage поддерживаются
    // console.log('++++');
    if (sessionStorage.length) {
        // alert('+');
        session_alert();
    }
    else {
        // alert('-');
    }

    function session_alert() {
        var top_alert = sessionStorage.getItem("site__alert");
        if (top_alert == 1) {
            $('.age').remove();
        } else {

        }
    }
}
else {
    //объекты sessionStorage и localtorage не поддерживаются
    // console.log('----');
}


// $('.age button[data-age]').click(function () {
//     if ($(this).data('age') == 1) {
//         sessionStorage.setItem("site__alert", "1");
//         $('.age').remove();
//     }
//     else {
//         sessionStorage.setItem("site__alert", "0");
//         $('.age .button-block').html('<p>к сожелению вы не можете<br/>посетить наш сайт</p>');
//     }
// });


window.onload = function(){

    baron({
        root: '.baron__root',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    });
}

function widthDetect() {
    if ($(window).width() >= 992) {

    }
    else {

    }
};
widthDetect();

$(window).resize(function () {
    widthDetect();
});
//==========================   Шапка при скролле   ==========================
$(window).scroll(function() {
    var $menu = $(".navbar-fixed");
    var windowHeight = $(window).height();
    var percent = 5;
    if ($(window).scrollTop() > (windowHeight/100*percent)) {
      $menu.addClass("scroll");
    } else if ($(window).scrollTop() <= (windowHeight/100*percent)){
      $menu.removeClass("scroll");
    }
});

$(document).ready(function(){
    //==========================   Кнопка вверх   ==========================
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            $(".nav .active").removeClass("active");
            $("header .nav li:first-child").addClass("active");
            return false;
        });
    });
    //==========================   Бургер меню   ==========================
    $(".navbar-toggle").click(function() {
        $(this).addClass('opened');
        $(".sandwich").toggleClass("active");
        if ($(".navbar-inverse").is(":visible")) {
            $(".navbar-inverse").hide(300);
            $(".navbar-inverse").removeClass('opened');

            $('body').css('height','auto');
            $('body').css('overflow-x','hidden');
            $('body').css('overflow-y','visible');
        } else {
            $(".navbar-inverse").show(300);
            $(".navbar-inverse").addClass('opened');

            $('body').css('height','100vh');
            $('body').css('overflow-x','hidden');
            $('body').css('overflow-y','hidden');
        }; 
    });
    //==========================   Добавление класса к заполненному полю   ==========================
    $('.form-control').on('blur', function(e){
        $(this)[($.trim($(this).val()).length)?'addClass':'removeClass']('notempty');
        if ($(this).hasClass('notempty')){
            $(this).parent('.form-group').find('span').addClass('notempty');
        }
        else {
            $(this).parent('.form-group').find('span').removeClass('notempty');
        }
    });
    //==========================   Маска телефона   ==========================
    $(function(){
        $("input[type$='tel']").mask("+38 (099) 999-99-99");
    });

    //==========================   Рецепты медведь светлое/крепкое   ==========================
    $(".brand-page .more input").on('click',function() {
        if ($(this).hasClass('clicked')){
            var this_button = $(this);
            $(this_button).removeClass('clicked').val('Узнать рецепт');
            $('.info-block').removeClass('opened').removeClass('collapsed');
            var this_text = $(this).parents('.info-block').find('.text');
            var this_recept = $(this).parents('.info-block').find('.recept');
            $(this_text).toggle(500);
            $(this_recept).toggle(500);
        }
        else{
            var this_button = $(this);
            $(this_button).addClass('clicked').val('Обратно');
            $('.info-block').removeClass('opened').removeClass('collapsed');
            var this_index = $(this).parents('.info-block').index();
            $(this).parents('.info-block').addClass('opened');

            if (this_index == 1){
                $('.info-block').eq(1).addClass('collapsed');
                $('.info-block').eq(1).find('.text').show(500);
                $('.info-block').eq(1).find('.recept').hide(500);
                $('.info-block').eq(1).find('input[type=button]').val('Узнать рецепт').removeClass('clicked');

                $(this).parents('.info-block').removeClass('collapsed');
                var this_text = $(this).parents('.info-block').find('.text');
                var this_recept = $(this).parents('.info-block').find('.recept');
                $(this_text).toggle(500);
                $(this_recept).toggle(500);
            }
            else if (this_index == 2){
                $('.info-block').eq(0).addClass('collapsed');
                $('.info-block').eq(0).find('input[type=button]').val('Узнать рецепт').removeClass('clicked');
                $('.info-block').eq(0).find('.text').show(500);
                $('.info-block').eq(0).find('.recept').hide(500);

                $(this).parents('.info-block').removeClass('collapsed');
                var this_text = $(this).parents('.info-block').find('.text');
                var this_recept = $(this).parents('.info-block').find('.recept');
                $(this_text).toggle(500);
                $(this_recept).toggle(500);
            }
            else{
                console.log('NULL');
            }
        }
    });

    //==========================   Параллакс брендовые страницы   ==========================
    if ($("#parallax-img-1").length){
        var scene1 = $('#parallax-img-1').get(0);
        var parallaxInstance1 = new Parallax(scene1);
    }
    else {console.log('#parallax-img-1 not found on this page');}
    if ($("#parallax-img-2").length){
        var scene2 = $('#parallax-img-2').get(0);
        var parallaxInstance2 = new Parallax(scene2);
    }
    else {console.log('#parallax-img-2 not found on this page');}
    if ($("#parallax-img-3").length){
        var scene3 = $('#parallax-img-3').get(0);
        var parallaxInstance3 = new Parallax(scene3);
    }
    else {console.log('#parallax-img-3 not found on this page');}
    if ($("#parallax-img-4").length){
        var scene4 = $('#parallax-img-4').get(0);
        var parallaxInstance4 = new Parallax(scene4);
    }
    else {console.log('#parallax-img-4 not found on this page');}

    //==========================   Input file   ==========================
    //http://yournet.kz/blog/js/stilizaciya-input-file
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });

});
$(window).load(function() {
    function widthDetect() {
        if ( $(window).width() >= 992 ){
            catalog_992();
        }
        else if ( $(window).width() <= 991 && $(window).width() >= 480 ){
            catalog_320();
        }
        else{
            catalog_320();
        }
    };
    widthDetect();

    $(window).resize(function() {
        widthDetect();
    });
    function catalog_992() {
        var catalog = $('.catalog-carousel');
        catalog.trigger('destroy.owl.carousel');
        catalog.removeClass('owl-carousel').removeClass('owl-theme');
    };
    function catalog_320() {
        var catalog = $('.catalog-carousel');
        catalog.on('initialized.owl.carousel', function(event) {
            $(catalog).animate({
                opacity: 1
            }, 300);

        }).owlCarousel({
            loop:true,
            center:true,
            margin:0,
            nav:true,
            navText:['<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'],
            dots:true,
            autoplay:false,
            autoplayTimeout:5000,
            smartSpeed:1000,
            dotsEach:true,
            items:4,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                768:{
                    items:3
                }
            }
        });
        catalog.addClass('owl-carousel').addClass('owl-theme');
    };
});

$(document).ready(function(){
    var banner = $('.banner-carousel');
    banner.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        navText:['<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'],
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        center:false,
        dotsEach:true,
        items:1
    });
});

$(window).on('load',function(){
    var footerHeight = $('footer').outerHeight();
    var wrapper = $('.wrap-head');

    var wrapperHeight;
    wrapperHeight = $(window).height() - footerHeight;
    // console.log($(window).height());
    // console.log(footerHeight);
    wrapper.css('min-height', wrapperHeight);
});

