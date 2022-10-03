function one() {
    console.log('completed')
}

function two(x) {
    x.call()
}

function three(x) {
    two(x)
}

three(one)

//Flow

// 1. (aakash13C.js@6:71-79, aakash13C.js@1:0-47) --> (aakash13C.js@13:121-131, aakash13C.js@9:87-119)
// (aakash13C.js@6:71-79, aakash13C.js@1:0-47) --> (aakash13C.js@10:111-117,)