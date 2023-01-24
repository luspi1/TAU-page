import { body, searchOverlay, pageWrapper } from "../_vars";


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

