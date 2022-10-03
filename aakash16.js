function done() {
    console.log("Done")
    return
}

function almost() {
    console.log("Almost Done")
    done.apply()
}

function oneMore() {
    console.log('oneMore')
    almost.apply()
}

oneMore()

//Flow
// 1. (aakash16.js@6:60-68, aakash16.js@1:0-43) --> (aakash16.js@13:175-185, aakash16.js@9:124-128)
//    (aakash16.js@6:60-68, aakash16.js@1:0-43) --> (aakash16.js@5:55-77, aakash16.js@5:55-77)