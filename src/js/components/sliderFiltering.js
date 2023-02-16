import { filterSliderByCategory, removeClasses } from '../_functions'

const filteringSliders = document.querySelectorAll('.filter-slider')


if (filteringSliders) {
  filteringSliders.forEach(sliderBlock => {
    const filterBtns = sliderBlock.querySelectorAll('[data-filter-btn]')

    const filteringSlider = sliderBlock.querySelector('.swiper-initialized')
    const filteringSlides = sliderBlock.querySelectorAll('[data-filter-slide]')

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        removeClasses('filter-slider-btn_active')
        btn.classList.add('filter-slider-btn_active')
        filteringSlider.swiper.removeAllSlides()
        filteringSlider.swiper.appendSlide(filterSliderByCategory(filteringSlides, btn.dataset.filterBtn))
      })
    })
  })
}




