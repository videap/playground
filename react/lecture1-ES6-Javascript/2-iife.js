//immediately invoked function express

//setting an anonoymous function will limit the variable not to be accessed by global scope
//this function will be called immediately

const value_in_scope = (function () {
    let secret_value = 1
    secret_value = secret_value + 1

    console.log(secret_value)
    //the secret_value is only acessible here
})()

// -------------

//resolving closure bug with iife

function printMessage() {
    var message = 'Hello!'

    return (function () {
      console.log(message)
    })()

    message = "This should not be printed"
  }

  const sayHello = printMessage()


//resolving closure bug with iife

function makeArrayWithBug() {
    const arr = []

    for (var i=0; i<5; i++){
        arr.push((function (x) {
            return (function () { console.log(x) })
        })(i))
    }
    return arr
}

const functArrBug = makeArrayWithBug()

console.log("Element [0] with closure bug is:")
functArrBug[0]()