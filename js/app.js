$(document).ready(function(){
  $('.food-slider').slick({
     autoplay:true,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    responsive:[
       {
          breakpoint:992,
          settings:{
           slidesToShow:2,
          }
       },
       {
        breakpoint:768,
        settings:{
         slidesToShow:1,
        }
     }
    ]

  });

  $('.nav-trigger').click(function(){
     $('.site-content-wrapper').toggleClass('scaled');
  })

   $('.subscribe button').click(function(){
      alert("Thank you for subscribing!");
   });

   $('.food-card button').click(function(){
      alert("Item added to cart!");
   });


   
});