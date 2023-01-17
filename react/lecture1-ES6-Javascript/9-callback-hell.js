import fetch from "node-fetch";

function doSomethingAsync1(callback, num){
    const new_num = num+1
    setTimeout(function (){ doSomethingAsync2(callback, new_num)} , 1000)
}

function doSomethingAsync2(callback, num){
    const new_num = num+1
    setTimeout(function (){ doSomethingAsync3(callback, new_num)} , 1000)
}

function doSomethingAsync3(callback, num){
    const new_num = num+1
    res = fetch(`http://echo.jsontest.com/newNum/${new_num}`)

    setTimeout(function (){ callback(res)} , 1000)
}

doSomethingAsync1(console.log, 1)