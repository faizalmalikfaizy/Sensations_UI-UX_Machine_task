 /**
   * Animation on scroll
   */
 window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


   // Get the header element
   var header = document.getElementById("main-header");

   // Listen for the scroll event
   window.onscroll = function() {
     // Check if the page has been scrolled 50px down
     if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
       // Add the 'scrolled' class to the header
       header.classList.add("scrolled");
     } else {
       // Remove the 'scrolled' class if the page is scrolled back to the top
       header.classList.remove("scrolled");
     }
   };
