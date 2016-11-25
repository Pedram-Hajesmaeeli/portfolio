/**
 * Created by pedram on 11/4/16.
 */
$(document).ready(function () {
    /**
     * use add class to remove the sudden resizing
     */
    $('.overlay-effect').fadeOut();
    
    $('.overlay').mouseenter(function () {
        $(this).children('.overlay-effect').fadeIn();
    });

    $('.overlay').mouseleave(function () {
        $(this).children('.overlay-effect').fadeOut();
    });

    ////////Scrollspy js
    $('body').scrollspy({
        target: "#nav-holder",
        offset: 142
    });

    $('nav a').on('click', function (e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 110
        }, 500, function(){
            window.location.hash = hash;
        });

        alert(href);
    })
    ////////End of scrollspy js

});
