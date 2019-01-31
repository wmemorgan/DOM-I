let intervalID 
function repeatHello () {
  let timeLimit = 200000
  let startTime = new Date().getTime()
  console.log(startTime)
  let stopTime = startTime + timeLimit
  console.log(stopTime)
  let counter = 10
  intervalID = setInterval(() => {
    console.log('Hello World!')
    counter--
    counter === 0 && stopInterval(intervalID)
    }, 10);
    
   function stopInterval(id) {
     clearInterval(id)
   } 
}

//repeatHello()