function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function init() {
    var speed = 250,
        easing = mina.easeinout;

    [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
            pathConfig = {
                from : path.attr( 'd' ),
                to : el.getAttribute( 'data-path-hover' )
            };

        el.addEventListener( 'mouseenter', function() {
            path.animate( { 'path' : pathConfig.to }, speed, easing );
        } );

        el.addEventListener( 'mouseleave', function() {
            path.animate( { 'path' : pathConfig.from }, speed, easing );
        } );
    } );
}

$(document).ready(function () {

    init();
    $(".button-collapse").sideNav();

    setTimeout(function () {
        var q = getUrlVars()['q'];
        $("iframe").contents().find("#search_bar_input").val(q);
    }, 1000);
});


