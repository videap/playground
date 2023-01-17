// let's create a function that can be bound with this:

const person = {
    name: "Vitor",
    greet: function() { console.log(`Hi, ${this.name}`) }
}

person.greet()

// now let's unbind this:

greetFunction = person.greet

// now let's bind explicitly to whatever we want:

greetFunction2 = person.greet.bind( { name: "This is a bounded object" })

greetFunction2()

// the call() and apply() does the same, but instead of returning, it invokes the function immediately

person.greet.call( { name: "This bounded object is invoked immediately"})
person.greet.apply( { name: "This bounded object is invoked immediately"})

//arrow notation binds the function to the context of where it is being typed/created

const newPerson = {
    name: "Tuti",
    greet: () => { this.name = "Tuti"; console.log(`Hi, ${this.name}`) }
}

console.log(`Hi, ${this.name}`)

newPerson.greet()