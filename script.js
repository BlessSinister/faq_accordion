const buttons = document.querySelectorAll('.img_plus')
const descriptions = document.querySelectorAll('.items')

buttons.forEach((button) => button.addEventListener('click', activeMode))

function activeMode(e) {
  if (
    e.target.getAttribute('id') === 'plus_1' &&
    e.target.getAttribute('src') !== './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-minus.svg')
    descriptions[0].classList.add('active')
  } else if (
    e.target.getAttribute('id') === 'plus_1' &&
    e.target.getAttribute('src') == './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-plus.svg')
    descriptions[0].classList.remove('active')
  }
  if (
    e.target.getAttribute('id') === 'plus_2' &&
    e.target.getAttribute('src') !== './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-minus.svg')
    descriptions[1].classList.add('active')
  } else if (
    e.target.getAttribute('id') === 'plus_2' &&
    e.target.getAttribute('src') == './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-plus.svg')
    descriptions[1].classList.remove('active')
  }
  if (
    e.target.getAttribute('id') === 'plus_3' &&
    e.target.getAttribute('src') !== './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-minus.svg')
    descriptions[2].classList.add('active')
  } else if (
    e.target.getAttribute('id') === 'plus_3' &&
    e.target.getAttribute('src') == './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-plus.svg')
    descriptions[2].classList.remove('active')
  }

  if (
    e.target.getAttribute('id') === 'plus_4' &&
    e.target.getAttribute('src') !== './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-minus.svg')
    descriptions[3].classList.add('active')
  } else if (
    e.target.getAttribute('id') === 'plus_4' &&
    e.target.getAttribute('src') == './assets/images/icon-minus.svg'
  ) {
    e.target.setAttribute('src', './assets/images/icon-plus.svg')
    descriptions[3].classList.remove('active')
  }
}
