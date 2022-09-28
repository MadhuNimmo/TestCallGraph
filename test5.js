function foo() { //2
        return there(hi)
}

function bar() {
        return
}

function hi() {
        return hello
}

function hello() {
        return
}

function there(x) {
        y = x() //3
        y()
        return bar
}
// bound 1 : test5.js@1:0-47->test5.js@5:xfgd-wew, test5.js@1:0-47->test5.js@5:xfgd-wew,
// bound 2 : test5.js@1:0-47->test5.js@5:xfgd-wew, 
// 
// function buyNow(x) {
//     addToCart(x)
// }

// function done() {
//     return
// }

// function completeBuy() {
//     console.log("Purchased")
//     return done
// }

// function addToCart(y) {
//     y()
// }

var x = foo()
x()
x()
var y = hi()
y()
there(foo) //1

    // buyNow(completeBuy)
    // addToCart(completeBuy)