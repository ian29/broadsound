
$(document).ready(function() {

    var aboveHeight = $('div.header').outerHeight();
    $(window).scroll(function(){

        if ( $(window).scrollTop() > aboveHeight ){
            $('div.nav').addClass('fixed animate-fast');
        } else {
            $('div.nav').removeClass('fixed animate-fast');
        }

    });
});
