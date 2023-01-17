// Set is an existing class from JS

class MySet extends Set {

    constructor(arr) {
        super(arr) // this is bringing all the properties from the constructor of the extended class
        this.originalArr = arr // this is a new property of the constructor
    }

    add(val) { // this is a new method for the class
        super.add(val)
        console.log(`Added Value ${val}`)
    }

    test() {
        console.log("test")
    }

    size() {
        return super.size
    }

    reset() {
        return new MySet(this.originalArr)
    }
}

let my_set = new MySet([1,2,3])

my_set.add(4)

my_set.add(5)

console.log(my_set.size())

console.log(my_set)

my_set = my_set.reset()

console.log(my_set.size())

console.log(my_set)