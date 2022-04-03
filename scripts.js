const button0 = document.getElementById('num0')
const button1 = document.getElementById('num1')
const button2 = document.getElementById('num2')
const button3 = document.getElementById('num3')
const button4 = document.getElementById('num4')
const button5 = document.getElementById('num5')
const button6 = document.getElementById('num6')
const button7 = document.getElementById('num7')
const button8 = document.getElementById('num8')
const button9 = document.getElementById('num9')
const buttonPlus = document.getElementById('opPlus')
const buttonMinus = document.getElementById('opMinus')
const buttonMultiply = document.getElementById('opMultiply')
const buttonDivide = document.getElementById('opDivide')
const buttonCE = document.getElementById('funcCE')

button0.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button0.value
})

button1.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button1.value
})

button2.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button2.value
})

button3.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button3.value
})

button4.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button4.value
})

button5.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button5.value
})

button6.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button6.value
})

button7.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button7.value
})

button8.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button8.value
})

button9.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += button9.value
})

buttonPlus.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += buttonPlus.value
})

buttonMinus.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += buttonMinus.value
})

buttonMultiply.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += buttonMultiply.value
})

buttonDivide.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value += buttonDivide.value
})

buttonCE.addEventListener('click', function () {
  const screen = document.getElementById('screen')
  screen.value = ''
})
