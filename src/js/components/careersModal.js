import { searchOverlay, body } from "../_vars";

const careersModals = document.querySelectorAll('.careers-modal')

const careersList = document.querySelector('.careers-caption__list')

// Функция открытия нужной модалки карьеры
const openCareerModal = (targetModal) => {
  careersModals.forEach(modal => {
    if (modal.dataset.career === targetModal) {
      body.classList.add('_lock')
      searchOverlay.classList.add('_active')
      modal.classList.add('_active')

      const formBtn = modal.querySelector('.careers-modal__apply-btn')
      const backFormBtn = modal.querySelector('.careers-form__back-btn')

      const careersMain = modal.querySelector('.careers-modal__main')
      const careersForm = modal.querySelector('.careers-modal__form-container')


      formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        careersMain.classList.remove('_active')
        careersForm.classList.add('_active')
      })

      backFormBtn.addEventListener('click', (e) => {
        e.preventDefault()
        careersForm.classList.remove('_active')
        careersMain.classList.add('_active')
      })

    }
  })
}

// Функция закрытия нужной модалки карьеры
const closeCareerModal = (targetModal) => {
  const activeModal = document.querySelector(`.careers-modal[data-career=${targetModal}]`)

  if (activeModal) {
    const closeBtn = activeModal.querySelector('.careers-modal__back-btn')
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      body.classList.remove('_lock')
      searchOverlay.classList.remove('_active')
      activeModal.classList.remove('_active')
    })
  }
}


if (careersList) {
  careersList.addEventListener('click', (e) => {
    if (e.target.classList.contains('careers-caption__list-item')) {
      const modal = e.target.dataset.career
      openCareerModal(modal)
      closeCareerModal(modal)
    }
  })
}

//Открытие textarea по нажатию на плюс

careersModals.forEach(modal => {
  const textareaInput = modal.querySelector('.careers-form__input-textarea')
  const addTextareaBtn = modal.querySelector('.careers-form__add-message-btn')
  if (addTextareaBtn) {
    addTextareaBtn.addEventListener('click', (e) => {
      e.preventDefault()
      textareaInput.classList.toggle('careers-form__input-textarea_active')
    })
  }
})


// Кастомный инпут файла

const inputFile = document.querySelector('.careers-form__input-file input[type=file]')

if (inputFile) {
  inputFile.addEventListener('change', (e) => {
    const fileName = e.target.files[0].name
    const fileText = e.target.closest('.careers-form__input-file').querySelector('.careers-form__file-text')

    fileText.textContent = fileName
    fileText.style.color = "#000000";
    fileText.style.fontWeight = "400";
  })
}


// Смена длинных placeholder на малых разрешениях
const careersUsernameInput = document.querySelector('.careers-form__input[name="careers-username"]')
const mediaQuery = window.matchMedia('(max-width: 768px)')


function handleTabletChange (e) {
  if (e.matches) {
    careersUsernameInput.placeholder = 'Username in messengers'
  }
}


if (careersUsernameInput) {
  mediaQuery.addListener(handleTabletChange)
  handleTabletChange(mediaQuery)
}
