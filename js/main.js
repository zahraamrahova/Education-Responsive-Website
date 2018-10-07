var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
}


$(document).ready(function(){
  $('.course-container').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });
});


$(document).ready(function(){
  $('.last-news-items-container').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});



$(document).ready(function(){
  $('.testimonials-slider-indicators').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonials-section-container-item-description',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  }); 
});

$(document).ready(function(){
  $('.testimonials-section-container-item-description').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonials-slider-indicators'
  });
});
