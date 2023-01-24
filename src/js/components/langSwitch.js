const langSwitch = document.querySelector('.lang-switch')

if (langSwitch) {
  langSwitch.addEventListener('click', (e) => {
    const disableBtn = e.currentTarget.querySelector('button:not(.active-lang)')
    e.target.classList.remove('active-lang')
    disableBtn .classList.add('active-lang')
  })
}
