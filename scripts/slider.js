let slideIndex = 0;
showSlides();


function plusSlides(n) {
    showSlides(slideIndex += n);

  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);


  }
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); 
}

//   let prev = document.getElementsByClassName('prev');
//   let next = document.getElementsByClassName('next');

// prev.addEventListener('click',()=>{
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       slideIndex++;
//       if (slideIndex > slides.length) {slideIndex = 1}
//       slides[slideIndex-1].style.display = "block";
//       setTimeout(showSlides, 5000); 
//   })
//   next.addEventListener('click',()=>{
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       slideIndex++;
//       if (slideIndex > slides.length) {slideIndex = 1}
//       slides[slideIndex-1].style.display = "block";
//       setTimeout(showSlides, 5000); 
//   })