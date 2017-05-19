$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
          $('.filter').show('1000');
        }
        else
        {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
        }
    });
if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
});

//Scroll click button
$("#check").click(function() {
    $('html,body').animate({
        scrollTop: $("#project").offset().top},
        'slow');
});

//Init WOWJs
new WOW().init();
