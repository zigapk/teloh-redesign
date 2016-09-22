$(document).ready(function(){
    //sets gallery ofsets
    var position = $("#gallery_container").offset();
    var width = $(document).width();
    var width_to_set = width - position.left;
    $("#gallery_container").width(width_to_set)

    $("#gallery_last_image").css("margin-right", position.left + "px")

    if(position.left == 0){
        $("#gallery_last_image").css("margin-right", "16px")
    }
});