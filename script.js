$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,
    });
    $('.slider').slider({fullWidth: true});
    $('select').formSelect();
});

