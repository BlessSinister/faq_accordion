const buttons = document.querySelectorAll('.img_plus')
console.log(buttons[0].getAttribute('src'))

buttons.forEach((item) => item.addEventListener('click', activeMode))

function activeMode(e) {
  console.log(e.target)
}
