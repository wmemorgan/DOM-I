let intervalID 
let timeLimit = 10

function countDown () {
  let counter = 0
  intervalID = setInterval(() => {
    console.log(counter)
    counter++

    if (counter === timeLimit) {
      clearInterval(intervalID)
    }
  }, 10);
}

countDown()