let intervalID 

function timer(timeLimit) {
  document.querySelector('.digits').style.color = 'initial'
  let counter = 0
  intervalID = setInterval(() => {
    counter++
    document.querySelector('#secondTens').textContent = parseInt((counter % 10000) / 1000)
    document.querySelector('#secondOnes').textContent = parseInt((counter % 1000) / 100)
    document.querySelector('#msHundreds').textContent = parseInt((counter % 100) / 10)
    document.querySelector('#msTens').textContent =  parseInt((counter % 10) / 1)

    if (counter === timeLimit) {
      document.querySelector('.digits').style.color = 'red'
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
startButton.addEventListener('click', () => timer(1000))
