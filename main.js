// swiper code 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   menu open and closing effect 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}

// close menu on scroll 
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}

// dark and light mode 
var theme = document.getElementById("theme");
theme.onclick = function(){
  // document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("light-mode")){
    document.body.classList.toggle("dark-mode");
    theme.classList.toggle("bx-sun");
  }else {
    document.body.classList.toggle("light-mode");
    theme.classList.toggle("bx-moon");
  }
}

// scrollreveal effect 
const animae = ScrollReveal({
    origin: "top",
    distance:"60px",
    duration: "2500",
    delay: "400"
});

animae.reveal(".nav");
animae.reveal(".navbar");
animae.reveal(".home-text", { origin: "left"});
animae.reveal(".home-img", { origin: "bottom"});
animae.reveal(".ser-box, .product-box, .team-box, .book-data", { interval: 80});