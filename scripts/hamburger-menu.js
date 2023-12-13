//When #wideMenu is "clicked" and the #wideMenu is hidden
$("#hamburgerButton").click(function() {
    if ($("#wideMenu").hasClass("accessible-hidden")) {
        //Remove .accessible-hidden to #wideMenu
        $("#wideMenu").removeClass("accessible-hidden");
        //When #wideMenu is "clicked" and the #wideMenu isn't hidden
    } else {
        //Add .accessible-hidden to #wideMenu
        $("#wideMenu").addClass("accessible-hidden");
    }
});

//When "resize" to window and it's too narrow
$(window).resize(function() {
    if ($(document).width() < 750) {
        //Remove .hidden to #hamburgerButton
        $("#hamburgerButton").removeClass("hidden");
        //Add .accessible-hidden to #wideMenu
        $("#wideMenu").addClass("accessible-hidden");
    //when "resize" to window and it is too wide
    } else {
        //Add .hidden to #hamburgerButton
        $("#hamburgerButton").addClass("hidden");
        //Remove .accessible-hidden to #widemenu
        $("#wideMenu").removeClass("accessible-hidden");
    }
    });

//Upon each page loading
$(document).ready(function() {
    //Check if the browser size is narrow
    if ($(document).width() < 750) {
        //Remove .hidden to #hamburgerButton
        $("#hamburgerButton").removeClass("hidden");
        //Add .accessible-hidden to #wideMenu
        $("#wideMenu").addClass("accessible-hidden");
    //Check if the browser size is wide
    } else {
       //Add .hidden to #hamburgerButton
       $("#hamburgerButton").addClass("hidden");
       //Remove .accessible-hidden to #widemenu
       $("#wideMenu").removeClass("accessible-hidden");
    }
});
