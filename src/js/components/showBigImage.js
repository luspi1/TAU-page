import {showBigImgModal} from '../_functions'

const imageElements = document.querySelectorAll('[data-big-img]')

if (imageElements) {
  imageElements.forEach(el => {
    const bigImgPath = el.dataset.bigImg
    el.addEventListener('click', (e) => {
      e.preventDefault()
      showBigImgModal(bigImgPath)
    })
  })
}
