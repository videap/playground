// let's create a function that can be bound with this:

const person = {
    name: "Vitor",
    greet: function() { console.log(`Hi, ${this.name}`) }
}

person.greet()

// now let's unbind this:

greetFunction = person.greet

// now let's bind explicitly to whatever we want - we bind to an object!:

greetFunction2 = person.greet.bind( { name: "This is a bounded object" })

greetFunction2()

// the call() and apply() does the same, but instead of returning, it invokes the function immediately

person.greet.call( { name: "This bounded object is invoked immediately"})
person.greet.apply( { name: "This bounded object is invoked immediately"})

//arrow notation binds the function to the context of where it is being typed/created
//so the binding happens at declaration of funtion, and this, super, arguments, everything from the context (at declaration) is saved

const newPerson = {
    name: "Tuti",
    greet: () => { console.log(`Hi, ${this.name}`) } // this line will return undefined
}

newPerson.greet()
//it's because this in the context is the global context, in this case, it doesn't have a property `.name`
//let's include the property in the context

this.contextProperty = "Vitor"

const newPerson2 = {
    name: "Tuti",
    greet: () => { console.log(`Hi, ${this.contextProperty}`) } // this line will be ok
}
newPerson2.greet()


//and the value can be preserved even if the function is passed to another object
const newPerson3 = {
    contextProperty: "Heitor"
}
newPerson3.greet = newPerson2.greet
newPerson3.greet()

// and even if it's explicitly bounded, the properties are kept.
boundedGreet = newPerson2.greet.bind(newPerson3)
boundedGreet()