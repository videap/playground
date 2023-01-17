// this is bounded to the object method
// a method is invoked, and the context of the invoke is where this is bound

// simple bounding

const student = {
    name: "vitor",
    greet: function () { console.log(`Hello ${this.name}`) }
}

student.greet()


// passing the function

const functionGreet = student.greet
functionGreet()
//the context of the invoke is now in the functionGreet context, which is the Global context


// bounding to another context

const student2 = {
    name: "Tuti"
}

student2.greet = student.greet
student2.greet()