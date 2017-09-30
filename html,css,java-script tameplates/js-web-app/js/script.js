jQuery(document).ready(function () {

    //create function for others site hight 
    function calcHight() {

        //variable for fuul hight - header
        var fullHightMunusHeader = jQuery(window).height() - jQuery(".app-header").outerHeight();

        //variable for determine the scrol hight
        var scrollHight = fullHightMunusHeader - jQuery(".nav-menu").outerHeight() - jQuery(".buttons").outerHeight();

        //Output the main-columns hights
        jQuery(".main-content, .sidebar-two, .sidebar-one").height(fullHightMunusHeader);

        //out put the scroll bar hight of scrollHight variable
        jQuery(".side-scroll").height(scrollHight);

    }

    //on page load run the function need must
    calcHight();

    //resisizing event of the window for full hight
    jQuery(window).resize(function () {
        calcHight();
    });


});