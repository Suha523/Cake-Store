$(document).scroll(function () {
    let nav = $(".fixed-top");
    let home = $('#home');
    nav.toggleClass('scrolled', $(this).scrollTop() > home.height());  
});

$('#a-about').click(function () {
  $('body,html').animate({ scrollTop: $('#about-section').height()+('#home').height() }, 100);
  return false;
});

$('#a-flavour').click(function () {
  $('body,html').animate({ scrollTop: $('#flavour-section').height()+$('#about-section').height()+('#home').height() }, 100);
  return false;
});

$('#a-gallery').click(function () {
  $('body,html').animate({ scrollTop: $('#gallery-section').height()+
  $('#flavour-section').height()+$('#about-section').height()+('#home').height()
 }, 100);
  return false;
});

$('#a-contact').click(function () {
  $('body,html').animate({ scrollTop: $('#contact-section').height()+
  $('#gallery-section').height()+
  $('#flavour-section').height()+$('#about-section').height()+('#home').height()  }, 100);
  return false;
});


$('.circle').mouseenter(function () { 
  let i = $(this).children('i');
  $(this).removeClass('border-cold-turkey-custom');
  i.removeClass('text-cold-turkey-custom');
  $(this).addClass('bg-bg-custom');
  i.addClass('text-brown-custom');
  i.css('font-size', '25px');
});

$('.circle').mouseleave(function () { 
  let i = $(this).children('i');
  $(this).removeClass('bg-bg-custom');
  i.removeClass('text-brown-custom');
  $(this).addClass('border-cold-turkey-custom');
  i.addClass('text-cold-turkey-custom');
  i.css('font-size', '25px');
  
});

