// Фильтрация

import { removeClasses } from '../_functions'

const filteringBlocks = document.querySelectorAll('.filter-block')

if (filteringBlocks) {
  filteringBlocks.forEach(filteringBlock => {
    const filteringElements = filteringBlock.querySelectorAll('[data-filter-el]')
    const filteringBtns = filteringBlock.querySelectorAll('[data-filter-btn]')
    const filteringElementsList = filteringElements[0].parentElement

    filteringBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        filteringBtns.forEach(btn => btn.classList.remove('filter-menu-btn_active'))
        e.currentTarget.classList.add('filter-menu-btn_active')

        if (e.currentTarget.dataset.filterBtn === 'all') {
          filteringElements.forEach(el => {
              filteringElementsList.insertAdjacentElement('beforeend', el)
            }
          )
        } else {
          filteringElementsList.innerHTML = ''
          filteringElements.forEach(el => {
              if (el.dataset.filterEl === e.currentTarget.dataset.filterBtn) {
                filteringElementsList.insertAdjacentElement('beforeend', el)
              }
            }
          )
        }
      })
    })

  })
}


// Переключения активных вкладок меню на странице статьи блога
const blogBtns = document.querySelectorAll('.blog-caption__menu-btn')

blogBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('blog-caption__menu-btn_active')
    btn.classList.add('blog-caption__menu-btn_active')
  })
})


