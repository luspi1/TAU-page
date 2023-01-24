const modalBtns = document.querySelectorAll('.products-main__prompt')
const promptModals = document.querySelectorAll('.prompt-modal')
import { body } from "../_vars";
import { removeClasses } from "../_functions";

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('prompt_active')
    body.classList.toggle('modal_open')
  })
})


// document.addEventListener( 'click', (e) => {
//   if (body.classList.contains('modal_open')) {
//     promptModals.forEach(el => {
//       const withinBoundaries = e.composedPath().includes(el);
//       console.log(withinBoundaries)
//       if ( !withinBoundaries && !e.target.classList.contains('products-main__prompt')) {
//         removeClasses('prompt_active')
//         body.classList.remove('modal_open')
//       }
//     })
//   }
// })
