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

const bigImgModal = document.querySelector(".big-img-modal");
const bigImgModalPicture = bigImgModal.querySelector("img");

let activeImage;
let activeImageIndex = 0;

const checkActiveBtn = () => {
  activeImageIndex === 0
    ? prevBigImgButton.classList.add("swiper-button-disabled")
    : prevBigImgButton.classList.remove("swiper-button-disabled");
  activeImageIndex === imageElements.length - 1
    ? nextBigImgButton.classList.add("swiper-button-disabled")
    : nextBigImgButton.classList.remove("swiper-button-disabled");
};

const switchBigSlide = (e) => {
  const isNextBtn = e.currentTarget.classList.contains("big-img-next-button");
  const isPrevBtn = e.currentTarget.classList.contains("big-img-prev-button");
  if (isNextBtn) {
    swiperGallery.slideNext();
    activeImageIndex++;
  }
  if (isPrevBtn) {
    swiperGallery.slidePrev();
    activeImageIndex--;
  }
  activeImage = imageElements[activeImageIndex];
  bigImgModalPicture.src = activeImage.dataset.bigImg;
  checkActiveBtn();
};

if (imageElements) {
  imageElements.forEach((el) => {
    const bigImgPath = el.dataset.bigImg;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      activeImage = el;
      activeImageIndex = el.ariaLabel[0] - 1;
      showBigImgModal(bigImgPath);
      swiperGallery.slideTo(activeImageIndex);
      checkActiveBtn();
    });
  });

  prevBigImgButton.addEventListener("click", switchBigSlide);
  nextBigImgButton.addEventListener("click", switchBigSlide);
}
