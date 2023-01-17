// closure bug with scoping of variable

function makeArrayWithBug() {
    const arr = []

    //the scope of var is within the function makeArrayWithBug(), and the console.log(i) is a function with a 
    //pointer to the variable
    for (var i=0; i<5; i++){
        arr.push(function () { console.log(i) })
    }
    return arr
    //so after the loop every element of the array is a pointer to the same variable in scope, so it gets updated
    //all values from the array are 5
}

const functArrBug = makeArrayWithBug()

console.log("Element [0] with closure bug is:")
functArrBug[0]()
//this element should have value 0

//----------------------------------------------------------------------------------------

function makeArrayWithoutBug() {
    const arr = []

    //the scope of let is within the for blocl, and the console.log(i) is a function with a
    //pointer to the variable only inside a loop
    //this means that the next iteration will not mess with the prior interation
    for (let i=0; i<5; i++){
        arr.push(function () { console.log(i) })
    }
    return arr

}

const functArrNoBug = makeArrayWithoutBug()

console.log("Element [0] without bug is:")
functArrNoBug[0]()
//this element should have value 0

