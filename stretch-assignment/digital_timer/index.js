let intervalID 

function timer(timeLimit) {
  let counter = 0
  intervalID = setInterval(() => {
    console.log(counter)
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

timer(1000)