const swiper = new Swiper(".banner__swiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    375: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      // spaceBetween: 10,
      // slidesPerColumnFill: "row",
    },
    992: {
      slidesPerView: 1,
      // spaceBetween: 45,
    },
    1200: {
      slidesPerView: 1,
      // spaceBetween: 40,
    },

    1400: {
      slidesPerView: 1,
      // spaceBetween: 45,
    },
    1650: {
      slidesPerView: 1,
      // spaceBetween: 45,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});
