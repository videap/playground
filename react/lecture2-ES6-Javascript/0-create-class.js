class Set {
    constructor(arr) {
        this.arr = arr
    }

    add(val) {
        if (! this.has(val)) this.arr.push(val)
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
        // this is the same syntax of:
        this.arr = this.arr.filter( (x) => {return x !== val})
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size() {
        return this.arr.length
    }
}

const my_set = new Set([1,2,3,4])

console.log(my_set.arr)

console.log(my_set.has(4))

my_set.add(5)

console.log(my_set.arr)

my_set.delete(3)

console.log(my_set.arr)

console.log (my_set.size)