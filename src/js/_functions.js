import { infoModal } from './_vars'

const removeClasses = (className) => {
  const classArr = document.querySelectorAll(`.${className}`)
  classArr.forEach(el => el.classList.remove(className))
}


// Фильтрация по категориям

const filterSliderByCategory = (array, category) => {
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
const serializeForm = (formNode) => {
  return new FormData(formNode)
}

// Фунцкия отправки fetch запросов
async function sendData (data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

// показ/скрытие модалки ошибки
const showInfoModal = (responseText) => {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }

  })
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}




export { removeClasses, filterSliderByCategory, serializeForm, showInfoModal, sendData }
