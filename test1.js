var x = function f1() { console.log("hi"); } // 1
var y = function f2(x) { x(); } // 2
var z = y; // 3
z(x); // 4