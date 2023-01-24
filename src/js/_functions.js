const removeClasses = (className) => {
  const classArr = document.querySelectorAll(`.${className}`)
  classArr.forEach(el => el.classList.remove(className))
}


// Фильтрация по категориям

const filterByCategory = (array, category) => {
  const filteredArr = []
  if (category.toLowerCase() === 'all') {
    return array
  }
  array.forEach(el => {
    if (el.dataset.filter.toLowerCase() === category.toLowerCase()) {
      filteredArr.push(el)
    }
  })
  return filteredArr
}

export { removeClasses, filterByCategory }
