import {Swiper} from 'swiper/bundle'


// Инициализация слайдеров
const captionSwiper = new Swiper('.caption-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
})

const swiperNews = new Swiper('.news__swiper', {
  navigation: {
    nextEl: '.news__swiper-button-next',
    prevEl: '.news__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 45
    },
    1280: {
      spaceBetween: 60,
      slidesPerView: 4,
    },
  }

})


const swiperProducts = new Swiper('.products__swiper', {
  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    520: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    768: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }
})

const swiperCareers = new Swiper('.careers__swiper', {
  navigation: {
    nextEl: '.careers__swiper-button-next',
    prevEl: '.careers__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 42
    },
  }
})

//
const swiperArticles = new Swiper('.articles__swiper', {
  navigation: {
    nextEl: '.articles__swiper-button-next',
    prevEl: '.articles__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 35,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }
})


const swiperGallery = new Swiper('.product-gallery__swiper', {
  navigation: {
    nextEl: '.product-gallery__swiper-button-next',
    prevEl: '.product-gallery__swiper-button-prev'
  },

  pagination: {
    el: '.product-gallery__pagination',
    clickable: 'true',
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 60,
  breakpoints: {
    768: {
      slidesPerView: 2,

    },
    1200: {
      slidesPerView: 3,

    },
    1600: {
      slidesPerView: 4,
    },
  }

})


const swiperCareersModal = new Swiper('.careers-modals-swiper', {

  navigation: {
    nextEl: '.careers-modals-swiper__swiper-button-next',
    prevEl: '.careers-modals-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',


  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 18
    },
  }
});


 export { swiperArticles }


