// first class functions takes functions into arguments or returns functions as values

let arr = [0,1,2,3,4,10]

//function for map:
function addOne(num) { return num + 1 }

console.log( arr.map(addOne))

//function for filter (has to return false or true)

function isGreaterThan2(num) { return num > 2 }

console.log ( arr.filter(isGreaterThan2) )

//function for reduce is an operation that needs 2 inputs, and will iterate over with the 2 first elements

function sum(x,y) { return x + y}

console.log ( arr.reduce(sum) )


// function forEach
const newArr = []
arr.forEach(function (val){ newArr.push(addOne(val)) })
console.log(newArr)