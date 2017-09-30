jQuery(document).ready(function () {

    var navOffSet = jQuery("nav").offset().top;

    var windowScroll = jQuery(window).scrollTop();
    
    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
    jQuery("nav").wrapInner('<div class="nav-inner"></div>');
    jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>')
    

    jQuery(window).scroll(function () {

        windowScroll = jQuery(window).scrollTop();

        if (windowScroll >= navOffSet) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }


    });


});