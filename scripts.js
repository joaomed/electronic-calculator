const screen = document.getElementById('screen')
let operator
let countOperator = 0
let countDot = 0
console.log(screen.value)

const button0 = document.getElementById('button0')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const buttonDot = document.getElementById('buttonDot')
const buttonPlus = document.getElementById('buttonPlus')
const buttonMinus = document.getElementById('buttonMinus')
const buttonMultiply = document.getElementById('buttonMultiply')
const buttonDivide = document.getElementById('buttonDivide')
const buttonCE = document.getElementById('buttonCE')
const buttonOFF = document.getElementById('buttonOFF')
const buttonEquals = document.getElementById('buttonEquals')

button0.addEventListener('click', () => {
  screen.value += '0'
  console.log(screen.value)
})
button1.addEventListener('click', () => {
  screen.value += '1'
  console.log(screen.value)
})
button2.addEventListener('click', () => {
  screen.value += '2'
  console.log(screen.value)
})
button3.addEventListener('click', () => {
  screen.value += '3'
  console.log(screen.value)
})
button4.addEventListener('click', () => {
  screen.value += '4'
  console.log(screen.value)
})
button5.addEventListener('click', () => {
  screen.value += '5'
  console.log(screen.value)
})
button6.addEventListener('click', () => {
  screen.value += '6'
  console.log(screen.value)
})
button7.addEventListener('click', () => {
  screen.value += '7'
  console.log(screen.value)
})
button8.addEventListener('click', () => {
  screen.value += '8'
  console.log(screen.value)
})
button9.addEventListener('click', () => {
  screen.value += '9'
  console.log(screen.value)
})
buttonDot.addEventListener('click', () => {
  if (!screen.value.endsWith('.') && !screen.value == '') {
    screen.value += '.'
  }
  console.log(screen.value)
})

buttonCE.addEventListener('click', clearScreen)
buttonOFF.addEventListener('click', clearScreen)

buttonPlus.addEventListener('click', () => {
  if (countOperator == 1) {
    buttonEqualsFunction()
  } else {
    countOperator += 1
  }
  operator = '+'
  screen.value += '+'
  console.log(operator)
})

buttonMinus.addEventListener('click', () => {
  if (countOperator == 1) {
    buttonEqualsFunction()
  } else {
    countOperator += 1
  }
  operator = '-'
  screen.value += '-'
  console.log(operator)
})

buttonMultiply.addEventListener('click', () => {
  if (countOperator == 1) {
    buttonEqualsFunction()
  } else {
    countOperator += 1
  }
  operator = '*'
  screen.value += '*'
  console.log(operator)
})

buttonDivide.addEventListener('click', () => {
  if (countOperator == 1) {
    buttonEqualsFunction()
  } else {
    countOperator += 1
  }
  operator = '/'
  screen.value += '/'
  console.log(operator)
})

buttonEquals.addEventListener('click', buttonEqualsFunction)

function buttonEqualsFunction() {
  switch (operator) {
    case '+':
      screen.value = screen.value
        .split('+')
        .map(valor => Number(valor))
        .reduce((acumulador, valor) => {
          return acumulador + valor
        })
      break

    case '-':
      screen.value = screen.value
        .split('-')
        .map(valor => Number(valor))
        .reduce((acumulador, valor) => {
          return acumulador - valor
        })
      break

    case '*':
      screen.value = screen.value
        .split('*')
        .map(valor => Number(valor))
        .reduce((acumulador, valor) => {
          return acumulador * valor
        })
      break

    case '/':
      screen.value = screen.value
        .split('/')
        .map(valor => Number(valor))
        .reduce((acumulador, valor) => {
          return acumulador / valor
        })
      break
  }
}

function clearScreen() {
  screen.value = ''
  countOperator = 0
  operator = ''
}
