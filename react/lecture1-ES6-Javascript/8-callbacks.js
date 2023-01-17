//just the root example of how a callback is created:

function doSomethingAsync(callback_function){
    setTimeout(function () { callback_function("Print this message") }, 1000)
    //setTimeout is an async function that will send the execution to the function queue after 1000ms
}

doSomethingAsync(console.log)