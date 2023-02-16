import { sendData, showInfoModal }          from '../_functions'
import { body, pageWrapper, searchOverlay } from "../_vars"


const searchBtn = document.querySelector('.search-btn')
const closeBtn = document.querySelector('.close-btn')
const searchMenu = document.querySelector('.search-menu')


// Управление состоянием меню поиска

if (searchBtn) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    searchMenu.classList.add('_active')
    searchOverlay.classList.add('_active')
    pageWrapper.classList.add('_active')
    body.classList.add('_lock')
  })
}

if (closeBtn) {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    searchMenu.classList.remove('_active')
    searchOverlay.classList.remove('_active')
    pageWrapper.classList.remove('_active')
    body.classList.remove('_lock')
  })
}


// Поиск по сайту

if (searchMenu) {
  const searchInput = searchMenu.querySelector('.search-menu__input')
  const dataScript = searchInput.dataset.script
  const searchList = searchMenu.querySelector('.search-menu__list')
  const resultsAmount = searchMenu.querySelector('.search-menu__results span')

  async function handleFormSubmit(event) {
    event.preventDefault()
    const inputData = event.target.value
    let totalData = {
      searchText: inputData,
    }

    const totalDataJson = JSON.stringify(totalData)

    const response = await sendData(totalDataJson, dataScript)
    const finishedResponse = await response.json()

    const {status, html, errortext} = finishedResponse
    if (status === 'ok') {
      searchList.innerHTML = html.join(' ')
      resultsAmount.textContent = String(searchList.children.length)
    } else {
      showInfoModal(errortext)
    }
  }
  searchInput.addEventListener('input', handleFormSubmit)
}











