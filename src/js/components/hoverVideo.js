const hoverTargets = document.querySelectorAll('.game-item__img')

if (hoverTargets) {

  hoverTargets.forEach(target => {
    target.addEventListener('mouseover', (e) => {
      const video = e.currentTarget.querySelector('video')
      video.play()
    })

    target.addEventListener('mouseout', (e) => {
      const video = e.currentTarget.querySelector('video')
      video.pause()
    })
  })


}
