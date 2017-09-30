jQuery(document).ready(function () {

    //variables for tracking windowhiht & position
    var windowPosTop = jQuery(window).scrollTop();
    var windowHight = jQuery(window).height();
    var windowPosBottom = windowPosTop + windowHight;


    //create a function - revealOnScroll
    jQuery.fn.reavealOnScroll = function (derection, speed) {
        return this.each(function () {

            //variable for tracking object offset
            var objectOffset = jQuery(this).offset();
            var objectOffsetTop = objectOffset.top;


            //initially hide this image
            if (!jQuery(this).hasClass("hidden")) {

                //create the derection function
                if (derection == "right") {

                    //if derection = right
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "700px",
                        "position": "relative"
                    });

                } else {
                    //if derection = left
                    jQuery(this).css({
                        "opacity": 0,
                        "right": "-700px",
                        "position": "relative"
                    });
                }

                jQuery(this).addClass("hidden");
            }


            //if logic for visible the object on right place on right time
            if (!jQuery(this).hasClass("animate")) {
                if (windowPosBottom > objectOffsetTop) {
                    jQuery(this).animate({
                        "opacity": 1,
                        "right": 0
                    }, speed).addClass("animate");
                }
            }


        });
    }

    //run scroll funtion for the scroll update
    jQuery(window).scroll(function () {


        //variables for tracking windowhiht & position
        windowPosTop = jQuery(window).scrollTop();
        windowHight = jQuery(window).height();
        windowPosBottom = windowPosTop + windowHight;


        //run reavealOnScroll function with scroll update
        jQuery(".sidebar").reavealOnScroll("right", 5000);
        jQuery(".example-photo").reavealOnScroll("right", 2000);
        jQuery(".bee").reavealOnScroll("left", 2000);
        jQuery(".orange").reavealOnScroll("right", 2000);
        jQuery("ul li").reavealOnScroll("left", 5000);


    });
});