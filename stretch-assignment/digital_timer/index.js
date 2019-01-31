let intervalID 
function repeatHello () {
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

repeatHello()