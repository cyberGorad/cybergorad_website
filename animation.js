$(window).scroll(function() {
  var element = $("#one");
  var elementPos = element.offset().top;
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  
  // Vérifie si le haut de l'élément est visible dans la fenêtre
  if (scrollPos > elementPos - windowHeight) {
    element.addClass("w3-animate-top");
  } else {
    element.removeClass("w3-animate-top");
  }
});
/****************************************************** */
$(window).scroll(function() {
  var element = $("#two");
  var elementPos = element.offset().top;
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  
  // Vérifie si le haut de l'élément est visible dans la fenêtre
  if (scrollPos > elementPos - windowHeight) {
    element.addClass("w3-animate-top");
  } else {
    element.removeClass("w3-animate-top");
  }
});
/********************************************************** */