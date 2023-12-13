$("#carousel-right-button").click(function() {
    if (!$("#carousel-image-1").hasClass("accessible-hidden")) {
        $("#carousel-image-1").addClass("accessible-hidden");
        $("#carousel-image-2").removeClass("accessible-hidden");
        $("#carousel-indicator-1").addClass("hidden");
        $("#carousel-indicator-1-no").removeClass("hidden");
        $("#carousel-indicator-2").removeClass("hidden");
        $("#carousel-indicator-2-no").addClass("hidden");
    } else if(!$("#carousel-image-2").hasClass("accessible-hidden")){
        $("#carousel-image-2").addClass("accessible-hidden");
        $("#carousel-image-3").removeClass("accessible-hidden");
        $("#carousel-indicator-2").addClass("hidden");
        $("#carousel-indicator-2-no").removeClass("hidden");
        $("#carousel-indicator-3").removeClass("hidden");
        $("#carousel-indicator-3-no").addClass("hidden");
    } else if(!$("#carousel-image-3").hasClass("accessible-hidden")){
        $("#carousel-image-3").addClass("accessible-hidden");
        $("#carousel-image-4").removeClass("accessible-hidden");
        $("#carousel-indicator-3").addClass("hidden");
        $("#carousel-indicator-3-no").removeClass("hidden");
        $("#carousel-indicator-4").removeClass("hidden");
        $("#carousel-indicator-4-no").addClass("hidden");
    } else if(!$("#carousel-image-4").hasClass("accessible-hidden")){
        $("#carousel-image-4").addClass("accessible-hidden");
        $("#carousel-image-5").removeClass("accessible-hidden");
        $("#carousel-indicator-4").addClass("hidden");
        $("#carousel-indicator-4-no").removeClass("hidden");
        $("#carousel-indicator-5").removeClass("hidden");
        $("#carousel-indicator-5-no").addClass("hidden");
    } else if(!$("#carousel-image-5").hasClass("accessible-hidden")){
        $("#carousel-image-5").addClass("accessible-hidden");
        $("#carousel-image-6").removeClass("accessible-hidden");
        $("#carousel-indicator-5").addClass("hidden");
        $("#carousel-indicator-5-no").removeClass("hidden");
        $("#carousel-indicator-6").removeClass("hidden");
        $("#carousel-indicator-6-no").addClass("hidden");
    } else if(!$("#carousel-image-6").hasClass("accessible-hidden")){
        $("#carousel-image-6").addClass("accessible-hidden");
        $("#carousel-image-7").removeClass("accessible-hidden");
        $("#carousel-indicator-6").addClass("hidden");
        $("#carousel-indicator-6-no").removeClass("hidden");
        $("#carousel-indicator-7").removeClass("hidden");
        $("#carousel-indicator-7-no").addClass("hidden");
    }
});
$("#carousel-left-button").click(function() {
    if(!$("#carousel-image-2").hasClass("accessible-hidden")){
        $("#carousel-image-2").addClass("accessible-hidden");
        $("#carousel-image-1").removeClass("accessible-hidden");
        $("#carousel-indicator-2").addClass("hidden");
        $("#carousel-indicator-2-no").removeClass("hidden");
        $("#carousel-indicator-1").removeClass("hidden");
        $("#carousel-indicator-1-no").addClass("hidden");
    } else if(!$("#carousel-image-3").hasClass("accessible-hidden")){
        $("#carousel-image-3").addClass("accessible-hidden");
        $("#carousel-image-2").removeClass("accessible-hidden");
        $("#carousel-indicator-3").addClass("hidden");
        $("#carousel-indicator-3-no").removeClass("hidden");
        $("#carousel-indicator-2").removeClass("hidden");
        $("#carousel-indicator-2-no").addClass("hidden");
    } else if(!$("#carousel-image-4").hasClass("accessible-hidden")){
        $("#carousel-image-4").addClass("accessible-hidden");
        $("#carousel-image-3").removeClass("accessible-hidden");
        $("#carousel-indicator-4").addClass("hidden");
        $("#carousel-indicator-4-no").removeClass("hidden");
        $("#carousel-indicator-3").removeClass("hidden");
        $("#carousel-indicator-3-no").addClass("hidden");
    } else if(!$("#carousel-image-5").hasClass("accessible-hidden")){
        $("#carousel-image-5").addClass("accessible-hidden");
        $("#carousel-image-4").removeClass("accessible-hidden");
        $("#carousel-indicator-5").addClass("hidden");
        $("#carousel-indicator-5-no").removeClass("hidden");
        $("#carousel-indicator-4").removeClass("hidden");
        $("#carousel-indicator-4-no").addClass("hidden");
    } else if(!$("#carousel-image-6").hasClass("accessible-hidden")){
        $("#carousel-image-6").addClass("accessible-hidden");
        $("#carousel-image-5").removeClass("accessible-hidden");
        $("#carousel-indicator-6").addClass("hidden");
        $("#carousel-indicator-6-no").removeClass("hidden");
        $("#carousel-indicator-5").removeClass("hidden");
        $("#carousel-indicator-5-no").addClass("hidden");
    } else if(!$("#carousel-image-7").hasClass("accessible-hidden")) {
        $("#carousel-image-7").addClass("accessible-hidden");
        $("#carousel-image-6").removeClass("accessible-hidden");
        $("#carousel-indicator-7").addClass("hidden");
        $("#carousel-indicator-7-no").removeClass("hidden");
        $("#carousel-indicator-6").removeClass("hidden");
        $("#carousel-indicator-6-no").addClass("hidden");
    }
});

$("#indicator-button-1").click(function() {
    $("#carousel-image-1").removeClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").removeClass("hidden");
    $("#carousel-indicator-1-no").addClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-2").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").removeClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").removeClass("hidden");
    $("#carousel-indicator-2-no").addClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-3").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").removeClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").removeClass("hidden");
    $("#carousel-indicator-3-no").addClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-4").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").removeClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").removeClass("hidden");
    $("#carousel-indicator-4-no").addClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-5").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").removeClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").removeClass("hidden");
    $("#carousel-indicator-5-no").addClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-6").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").removeClass("accessible-hidden");
    $("#carousel-image-7").addClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").removeClass("hidden");
    $("#carousel-indicator-6-no").addClass("hidden");
    $("#carousel-indicator-7").addClass("hidden");
    $("#carousel-indicator-7-no").removeClass("hidden");
});

$("#indicator-button-7").click(function() {
    $("#carousel-image-1").addClass("accessible-hidden");
    $("#carousel-image-2").addClass("accessible-hidden");
    $("#carousel-image-3").addClass("accessible-hidden");
    $("#carousel-image-4").addClass("accessible-hidden");
    $("#carousel-image-5").addClass("accessible-hidden");
    $("#carousel-image-6").addClass("accessible-hidden");
    $("#carousel-image-7").removeClass("accessible-hidden");
    $("#carousel-indicator-1").addClass("hidden");
    $("#carousel-indicator-1-no").removeClass("hidden");
    $("#carousel-indicator-2").addClass("hidden");
    $("#carousel-indicator-2-no").removeClass("hidden");
    $("#carousel-indicator-3").addClass("hidden");
    $("#carousel-indicator-3-no").removeClass("hidden");
    $("#carousel-indicator-4").addClass("hidden");
    $("#carousel-indicator-4-no").removeClass("hidden");
    $("#carousel-indicator-5").addClass("hidden");
    $("#carousel-indicator-5-no").removeClass("hidden");
    $("#carousel-indicator-6").addClass("hidden");
    $("#carousel-indicator-6-no").removeClass("hidden");
    $("#carousel-indicator-7").removeClass("hidden");
    $("#carousel-indicator-7-no").addClass("hidden");
});
