jQuery(document).ready(function() {
   //add the x button 
   jQuery(".ui-message").append('<span class="ui-close">X</span>');
    
    //ui-close on click event
    jQuery(".ui-close").click(function() {
        jQuery(this).parents(".ui-message").hide();
    });
    
    //initially hide the answers
    jQuery(".answer").hide();
    
    //click event - faq section
    jQuery(".faq h4").click(function() {
        jQuery(this).next(".answer").slideToggle();
    });
    
    //add class on faq h4
    jQuery(".faq h4").addClass("faq-question")
    
    //add load content on load more
    jQuery("#about").click(function() {
        jQuery(".about-placeholder").load("about.html .body-text");
        return false;
    });
});