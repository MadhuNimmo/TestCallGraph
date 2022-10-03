var x = function () { console.log("hi"); } // 1
var y = function (p) { p.call(this); } // 2 bound 2
var z = y; // 3
z(x); // 4 bound 1 