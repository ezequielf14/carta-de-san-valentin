const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
let fontSize = 2
let messages = [
  'no hay mas pollito,pollito,pollito',
  'pollito malo',
  'pollito tonto',
  'dale te extraño',
  'sos re gei'
]
buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`
  const indexRandom = Math.floor(Math.random() * messages.length)
  buttonNo.textContent = messages[indexRandom]
})
buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})