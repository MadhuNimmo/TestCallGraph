var foo = function (x) {
        x();
}
var don = function () {
        return "don";
}
var bar = function () {
        return don.call(this);
}
foo(bar)