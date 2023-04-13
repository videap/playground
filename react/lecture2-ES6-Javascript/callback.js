
function logMessage( message ) {
    console.log(message)
}

logMessage("Hello")


// --------

function logMessageAsync ( message ) {
    // setTimeout( console.log(message), 1000 ) 
    // THIS RETURNS AN ERROR `TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined`

    setTimeout( function(){ console.log(message) }, 1000)


}

logMessageAsync( "Hello Async" )