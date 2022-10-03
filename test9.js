function foo() {
        return "foo"
}
function bar(x) {
        return x.call(this)
}
bar(foo)