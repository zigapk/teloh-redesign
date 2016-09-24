$(document).ready(function(){
    //sets gallery ofsets
    var position = $("#details_container").offset();
    //var width = $(document).width();
    // var width_to_set = width - position.left;
    //$("#gallery_container").width(width_to_set)

    $("#gallery_first_image").css("margin-left", position.left + "px");
    $("#gallery_last_image").css("margin-right", position.left + "px");

    $("#left_gallery_arrow").css("top", ($("#gallery_container").offset().top + 16)+ "px");
    $("#left_gallery_arrow").css("left", position.left + "px");

    $("#right_gallery_arrow").css("top", ($("#gallery_container").offset().top + 16)+ "px");
    $("#right_gallery_arrow").css("right", position.left + "px");

    if(position.left == 0){
        $("#gallery_last_image").css("margin-right", "16px")
    }
});

function scrollGallery(direction) {
    $(".pic-container").animate({
        scrollLeft: $(".pic-container").scrollLeft() + 400*direction
    }, 300);
}