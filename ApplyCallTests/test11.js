var x = function () { console.log("hi"); } // 1
var y = function () { return x; } // 2
var z = y; // 3
var m = z(); // 4 bound 1
m.call(this) // 5 bound 2