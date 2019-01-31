let intervalID 
let timeLimit = 2000

function countDown () {
  let counter = 0
  intervalID = setInterval(() => {
    console.log(counter)
    counter++
    document.querySelector('#msTens').textContent =  parseInt((counter % 10) / 1)
    document.querySelector('#msHundreds').textContent = parseInt((counter % 100) / 10)
    document.querySelector('#secondOnes').textContent = parseInt((counter % 1000) / 100)
    document.querySelector('#secondTens').textContent =  parseInt((counter % 10000) / 1000)
    if (counter === timeLimit) {
      clearInterval(intervalID)
    }
  }, 10);
}

countDown()