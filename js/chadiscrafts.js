$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    prevText: "&#65513;",
    nextText: "&#65515;",  
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});