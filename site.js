
$(document).ready(function() {

    var aboveHeight = $('div.header').outerHeight() + 130;
    $(window).scroll(function(){

        if ( $(window).scrollTop() > aboveHeight ){
            $('div.nav').addClass('fixed animate-fast');
        } else {
            $('div.nav').removeClass('fixed animate-fast');
        }

    });
});
