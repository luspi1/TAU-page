import { removeClasses, filterByCategory } from "../_functions";
import { swiperWork, swiperCareersWork } from "./slider";

const productBtns = document.querySelectorAll('.products-main__menu-btn')
const blogBtns = document.querySelectorAll('.blog-caption__menu-btn')
const careersBtns = document.querySelectorAll('.careers-caption__menu-btn')
const articlesBtns = document.querySelectorAll('.articles-page__menu-btn')

const workBtns = document.querySelectorAll('.company-work__menu-btn')
const workSlides = document.querySelectorAll('.work-swiper__slide')


const careersWorkBtns = document.querySelectorAll('.careers-work__menu-btn')
const careersWorkSlides = document.querySelectorAll('.careers-work-swiper__slide')

// Переключения активных вкладок меню фильтрации продуктов

productBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('products-main__menu-btn_active')
    btn.classList.add('products-main__menu-btn_active')
  })
})


// Фильтрация слайдов в разделе работы на странице компании

workBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('company-work__menu-btn_active')
    btn.classList.add('company-work__menu-btn_active')
    swiperWork.removeAllSlides()
    swiperWork.appendSlide(filterByCategory(workSlides, btn.dataset.filter))

  })
})

// Фильтрация слайдов на странице карьеры

careersWorkBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('careers-work__menu-btn_active')
    btn.classList.add('careers-work__menu-btn_active')
    swiperCareersWork.removeAllSlides()
    swiperCareersWork.appendSlide(filterByCategory(careersWorkSlides, btn.dataset.filter))

  })
})


// Переключения активных вкладок меню на странице статьи блога

blogBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('blog-caption__menu-btn_active')
    btn.classList.add('blog-caption__menu-btn_active')
  })
})


// Переключения активных вкладок меню на странице карьеры

careersBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('careers-caption__menu-btn_active')
    btn.classList.add('careers-caption__menu-btn_active')
  })
})

// Переключения активных вкладок страницы блога

articlesBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('articles-page__menu-btn_active')
    btn.classList.add('articles-page__menu-btn_active')
  })
})


