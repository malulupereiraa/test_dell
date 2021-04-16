$(document).on('click', '.quick-links-outer-container', function(e) {
    e.preventDefault();
});

$(document).ready(function () {
  
  $('.top-offset-20 > div.row > div.half-hero > div.half-hero-outer-container > a > div').css( "background-color", "purple" );
  
  $('.flex-active-slide > article > div > a > div').css( "background-color", "orange" );
  
  $('div.wide-hero-outer-container > a > div').css("background-color", "green");
  
  $('div.modules-outer-container > div.modules-inner-container > a > div.inner-module-image').css("background-color", "green");

  var clonedElement = $('div.row:nth-child(29) > div:nth-child(1) > div:nth-child(2)').clone();
  
  clonedElement.appendTo('div.row:nth-child(15) > div:nth-child(1)');
  
  $('div.row:nth-child(15) > div:nth-child(1) > div:nth-child(2)').remove();
  
  var total = 0;
  
  $('div.row:nth-child(27) > div.half-hero > div.half-modules-outer-container > div.half-modules-inner-container > div').each(function() {
    var sd=$(this).text().replace(/[^\d.-]/g, '');  
    sd=parseFloat(sd);
    total += sd;
  });
  
  alert("Offer of the day! If you buy the 4 things announced in 'Power, Batteries & Adapters', you'll pay: $"+ total);
  
  
  
})