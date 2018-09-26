function TypeIntro() {

    new TypeIt('#typing', {
        speed: 100,
        startDelay: 250,
        loopDelay: 2000,
        lifeLike: true,
        autoStart: true,
        cursor: true,
        cursorSpeed: 750,
        nextStringDelay: 2000,
        loop: true,
        strings: ["React", "JavaScript", "Materialize", "Bootstrap", "MongoDB", "Node", "HTML", "CSS"],
        breakLines: false
    });
}

$(document).ready(function () {
    TypeIntro();
});

$("#subtitle").hide().delay(3000).fadeIn(5000);
$("#scroll-downs").hide().delay(7000).fadeIn(5000);
$(".magic").hide().delay(5000).fadeIn(5000);

$(".nav1").on("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
    $(".button-collapse").sidenav('hide');
});

$(".nav2").on("click", function () {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: "smooth"
    });
});

$(".nav4").on("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

$(".buttonCollapse").on("click", function() {
    $("#sidenav-overlay").trigger("click");
    return false;
})

$(".brandlogo").on("click", function () {
    document.querySelector("#landing").scrollIntoView({
        behavior: "smooth"
    });
});

$("#scroll-downs").on("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$( document ).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
  });

$('#carouselNext').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

 $('#carouselPrevious').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });