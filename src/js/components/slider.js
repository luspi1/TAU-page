import { Swiper } from "swiper/bundle";


// Инициализация слайдеров
const captionSwiper = new Swiper('.caption-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});

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

});


const swiperProducts = new Swiper('.products__swiper', {
  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 40,

  breakpoints: {
    520: {
      spaceBetween: 80,
      slidesPerView: 2,
    },

    768: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 90,
      slidesPerView: 4,
    },
  }
});
const swiperServices = new Swiper('.services__swiper', {
  navigation: {
    nextEl: '.services__swiper-button-next',
    prevEl: '.services__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1440: {
      spaceBetween: 50,
      slidesPerView: 4,
    }
  }
});
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
      spaceBetween: 65
    },
  }
});

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
});


const swiperGallery = new Swiper('.product-gallery__swiper', {
  navigation: {
    nextEl: '.product-gallery__swiper-button-next',
    prevEl: '.product-gallery__swiper-button-prev'
  },

  spaceBetween: 200,

  pagination: {
    el: '.product-gallery__pagination',
    clickable: 'true',
  },

});


const swiperHistory = new Swiper('.company-history__swiper', {
  navigation: {
    nextEl: '.company-history__swiper-button-next',
    prevEl: '.company-history__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
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
});

const swiperOffice = new Swiper('.company-office__swiper', {
  navigation: {
    nextEl: '.company-office__swiper-button-next',
    prevEl: '.company-office__swiper-button-prev'
  },
  slidesPerView: 1.41,
  centeredSlides: true,
  spaceBetween: 35,
  initialSlide: 1,
  breakpoints: {
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 35
    },
    1280: {
      spaceBetween: 35,
      slidesPerView: 1.41,
    },
  },
  pagination: {
    el: '.company-office__pagination',
    type: 'fraction',
  },
});

const swiperWork = new Swiper('.company-work__swiper', {
  navigation: {
    nextEl: '.company-work__swiper-button-next',
    prevEl: '.company-work__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  observer: true,

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
});


const swiperBlogItem = new Swiper('.blog-item__swiper', {
  navigation: {
    nextEl: '.blog-item__swiper-button-next',
    prevEl: '.blog-item__swiper-button-prev'
  },
  spaceBetween: 210,
});

const swiperMoreArticles = new Swiper('.more-articles-swiper', {

  navigation: {
    nextEl: '.more-articles-swiper__swiper-button-next',
    prevEl: '.more-articles-swiper__swiper-button-prev'
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
});


const swiperCareersWork = new Swiper('.careers-work__swiper', {
  navigation: {
    nextEl: '.careers-work__swiper-button-next',
    prevEl: '.careers-work__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  observer: true,

  slidesPerView: 1,
  spaceBetween: 25,
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
});


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


export { swiperWork, swiperCareersWork }


