let intervalID

const timer = (timeLimit) => {
  document.querySelector('.digits').style.color = 'initial'
  startButton.removeEventListener('click', startTimer)
  let counter = 0
  intervalID = setInterval(() => {
    counter++
    document.querySelector('#secondTens').textContent = parseInt((counter % 10000) / 1000)
    document.querySelector('#secondOnes').textContent = parseInt((counter % 1000) / 100)
    document.querySelector('#msHundreds').textContent = parseInt((counter % 100) / 10)
    document.querySelector('#msTens').textContent = parseInt((counter % 10) / 1)

    if (counter === timeLimit) {
      document.querySelector('.digits').style.color = 'red'
      startButton.addEventListener('click', startTimer)
      clearInterval(intervalID)
    }
  }, 10);
}

const startButton = document.createElement('button')
startButton.setAttribute(
  "style",
  `display: block;
   margin: 10px auto; 
   padding: 10px 20px;
   border: 1px solid black;
   font-size: 1.5rem;
   border-radius: 15px;
   cursor: pointer;
   `
)
startButton.textContent = 'Start'
document.querySelector('.digits').append(startButton)

const startTimer = () => {
  timer(1000)
}

startButton.addEventListener('click', startTimer)

const resetTimer = () => {
  clearInterval(intervalID)
  document.querySelectorAll('.digit').forEach(digit => {
    if (digit.id !== 'colon') {
      digit.textContent = 0
    }
  })
  document.querySelector('.digits').style.color = 'initial'
  startButton.addEventListener('click', startTimer)
}

const resetButton = document.createElement('button')
resetButton.setAttribute(
  "style",
  `display: block;
   margin: 10px auto; 
   padding: 10px 20px;
   border: 1px solid black;
   font-size: 1.5rem;
   border-radius: 15px;
   cursor: pointer;
   `
)
resetButton.textContent = 'Reset'
document.querySelector('.digits').append(resetButton)

resetButton.addEventListener('click', resetTimer)
