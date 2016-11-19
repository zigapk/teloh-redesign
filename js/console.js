$(document).ready(function () {
    $(".button-collapse").sideNav({
        draggable: true
    });

    $('select').material_select();
});

function clearNavSearch() {
    $("#search").val("");
    $("#search").focus();
}