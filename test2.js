function foo() {
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
        y = x()
        y()
}