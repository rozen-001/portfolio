jQuery(document).ready(function () {
    
    //add the css classes
    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    
    // select the exact hight of nav & nav-placeholder
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());
    jQuery("nav").wrapInner('<div class="nav-inner"></div>');

    //tracking the nav offset
        var navOffset = jQuery("nav").offset().top;
    
    //tracking the window position top
        var windowPos = jQuery(window).scrollTop();


    
    //updating the window scroll function 
    jQuery(window).scroll(function () {
        
        
    
        //tracking the window position top
            windowPos = jQuery(window).scrollTop();

        
        //if logic for sticky the navigation
        if (windowPos >= navOffset) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
});