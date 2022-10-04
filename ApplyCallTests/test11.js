var x = function () { console.log("hi"); } // 1
var y = function () { return x; } // 2
var z = y; // 3
var m = z(); // 4 bound 1
m.call(this) // 5 bound 2

//Flow
// 1. (test10.js@4:116-120, test10.js@2:56-86)
// 2. (test10.js@2:71-83, test10.js@1:8-42) --> (test10.js@4:116-120, test10.js@2:56-86)