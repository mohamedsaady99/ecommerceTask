$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
  {
      items:4.4,
      Boolean:true,
      autoplay:true,
          responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        767:{
          items: 3
        },
        992:{
          items: 4.4
        }
    }
  });
    var size = document.getElementById('size');
  $('.colors-and-sizes button:nth-of-type(2)').click(function(){
      size.innerHTML = $('.colors-and-sizes button:nth-of-type(2)').html();
  });
    $('.colors-and-sizes button:nth-of-type(3)').click(function(){
      size.innerHTML = $('.colors-and-sizes button:nth-of-type(3)').html();
  });
    $('.colors-and-sizes button:nth-of-type(4)').click(function(){
      size.innerHTML = $('.colors-and-sizes button:nth-of-type(4)').html();
  });
    $('.colors-and-sizes button:nth-of-type(5)').click(function(){
      size.innerHTML = $('.colors-and-sizes button:nth-of-type(5)').html();
  });
    var color = document.getElementById('color');
    $('.colors-and-sizes a:first-of-type').mouseenter(function(){
        color.innerHTML ='Olive' ;
        $('.white-tshirt').hide();
        $('.black-tshirt').hide();
        $('.olive-tshirt').show();
    });
    $('.colors-and-sizes a:nth-of-type(2)').mouseenter(function(){
        color.innerHTML ='Black' ;
        $('.olive-tshirt').hide();
        $('.white-tshirt').hide();
        $('.black-tshirt').show();
    });
    $('.colors-and-sizes a:nth-of-type(3)').mouseenter(function(){
        color.innerHTML ='White' ;
        $('.olive-tshirt').hide();
        $('.black-tshirt').hide();
        $('.white-tshirt').show();
    });
    

    
});