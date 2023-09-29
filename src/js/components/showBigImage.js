import { showBigImgModal } from "../_functions";
import { Swiper } from "swiper/bundle";

const swiperGallery = new Swiper(".product-gallery__swiper", {
  navigation: {
    nextEl: ".product-gallery__swiper-button-next",
    prevEl: ".product-gallery__swiper-button-prev",
  },

  pagination: {
    el: ".product-gallery__pagination",
    clickable: "true",
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 62,
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
  },
});

const imageElements = document.querySelectorAll("[data-big-img]");

const prevBigImgButton = document.querySelector(".big-img-prev-button");
const nextBigImgButton = document.querySelector(".big-img-next-button");

let activeImage;
let activeImageIndex;

if (imageElements) {
  imageElements.forEach((el) => {
    const bigImgPath = el.dataset.bigImg;
    el.addEventListener("click", (e) => {
      activeImage = el;
      activeImageIndex = el.ariaLabel[0] - 1;
      e.preventDefault();
      showBigImgModal(bigImgPath);
      swiperGallery.slideTo(Array.from(imageElements).indexOf(el));

      nextBigImgButton.classList.remove("swiper-button-disabled");
      prevBigImgButton.classList.remove("swiper-button-disabled");
    });
  });

  if (prevBigImgButton) {
    prevBigImgButton.addEventListener("click", () => {
      swiperGallery.slidePrev();
      activeImageIndex -= 1;

      activeImage = imageElements[activeImageIndex];
      const activePath = activeImage.dataset.bigImg;
      showBigImgModal(activePath);

      if (activeImageIndex === 0) {
        prevBigImgButton.classList.add("swiper-button-disabled");
      }
    });
  }

  if (nextBigImgButton) {
    nextBigImgButton.addEventListener("click", () => {
      swiperGallery.slideNext();
      activeImageIndex += 1;

      activeImage = imageElements[activeImageIndex];
      const activePath = activeImage.dataset.bigImg;
      showBigImgModal(activePath);

      if (activeImageIndex + 1 === imageElements.length) {
        nextBigImgButton.classList.add("swiper-button-disabled");
      }
    });
  }
}
