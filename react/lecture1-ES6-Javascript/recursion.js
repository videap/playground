function recurse(x){
    console.log(`Recursion ${x}`)
    return recurse(x+1)
}

recurse(1)