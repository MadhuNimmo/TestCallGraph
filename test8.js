function bar() {
        return "bar";
}
function foo() {
        return bar
}
var x = foo.call(this)
x.apply([])