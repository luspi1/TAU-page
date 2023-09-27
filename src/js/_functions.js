import {bigImgModal, infoModal, searchOverlay} from './_vars'

export const removeClasses = (className) => {
  const classArr = document.querySelectorAll(`.${className}`)
  classArr.forEach(el => el.classList.remove(className))
}


// Фильтрация по категориям

export const filterSliderByCategory = (array, category) => {
  const filteredArr = []
  if (category.toLowerCase() === 'all') {
    return array
  }
  array.forEach(el => {
    if (el.dataset.filterSlide.toLowerCase() === category.toLowerCase()) {
      filteredArr.push(el)
    }
  })
  return filteredArr
}

//Сбор данных форм
export const serializeForm = (formNode) => {
  return new FormData(formNode)
}

// Фунцкия отправки fetch запросов
export async function sendData (data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

// показ/скрытие модалки ошибки
export const showInfoModal = (responseText) => {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }

  })
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}

// Функция показа модалки большой картинки

export const showBigImgModal = (path) => {
  bigImgModal.classList.add('big-img-modal_active')
  bigImgModal.querySelector('img').src = path
  searchOverlay.classList.add('_active')
  searchOverlay.addEventListener('click', () => {
    searchOverlay.classList.remove('_active')
    bigImgModal.classList.remove('big-img-modal_active')
  })
}



