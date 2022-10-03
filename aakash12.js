var x = function f1() { console.log('hi') }
var y = function f2(x) { x() }
var z = y
y(x)

// function main() {
//     return 2
// }
// x = main()
