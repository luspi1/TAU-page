import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";



// Анимация точки по траектории

const pathLine = document.querySelector('#dotPath')
const pathDot = document.querySelector('.path-dot')
const prompt1 = document.querySelector('.prompt1')
const prompt2 = document.querySelector('.prompt2')
const prompt3 = document.querySelector('.prompt3')
const prompt4 = document.querySelector('.prompt4')


gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.defaults({ease: "none"});


if (window.matchMedia("(min-width: 1651px)").matches && pathDot) {
  gsap.to('.path-dot', {
    scrollTrigger: {
      trigger: pathDot,
      start: "top 59%",
      end: '+=5480px',
      scrub: 1,
    },
    duration: 8,
    immediateRender: true,
    motionPath: {
      path: pathLine,
      align: pathLine,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0,
    },
  })
}

if (window.matchMedia("(max-width: 1650px)").matches && pathDot) {
  gsap.to('.path-dot', {
    scrollTrigger: {
      trigger: pathDot,
      start: "top 72%",
      end: '+=5000px',
      scrub: 1,
    },
    duration: 15,
    immediateRender: true,
    motionPath: {
      path: pathLine,
      align: pathLine,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    },
  })
}
if (window.matchMedia("(max-width: 1440px)").matches && pathDot) {
  gsap.to('.path-dot', {
    scrollTrigger: {
      trigger: pathDot,
      start: "top 72%",
      end: '+=4700px',
      scrub: 1,
    },
    duration: 15,
    immediateRender: true,
    motionPath: {
      path: pathLine,
      align: pathLine,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    },
  })
}
if (window.matchMedia("(max-width: 1280px)").matches && pathDot) {
  gsap.to('.path-dot', {
    scrollTrigger: {
      trigger: pathDot,
      start: "top 85%",
      end: '+=4000px',
      scrub: 1,
    },
    duration: 15,
    immediateRender: true,
    motionPath: {
      path: pathLine,
      align: pathLine,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0
    },
  })
}






const trackCoord = (element, corrX, corrY, isReverse) => {
  let x = element.getBoundingClientRect().x
  let dotX = pathDot.getBoundingClientRect().x - corrX

  let y = element.getBoundingClientRect().y
  let dotY = pathDot.getBoundingClientRect().y + corrY

  if (isReverse) {
    if (dotX < x && dotY > y) {
      element.classList.add('_active')
    }
  } else if (dotX > x && dotY > y)  {
    element.classList.add('_active')
  }
}

if (prompt1) {
  window.addEventListener('scroll', function () {
    trackCoord(prompt1, 90, 0, true)
    trackCoord(prompt2, 0, 0, false)
    trackCoord(prompt3, 0, 0, false)
    trackCoord(prompt4, 0, 0, true)
  });
}

