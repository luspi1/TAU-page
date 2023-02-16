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

export { removeClasses, filterSliderByCategory }
