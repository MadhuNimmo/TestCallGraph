var x = function () { console.log("hi"); } // 1
var y = function (p) { p.call(this); } // 2 bound 2
var z = y; // 3
z(x); // 4 bound 1 

//Flow
// 1. (test10.js@4:116-120, test10.js@2:56-86)
// 2. (test10.js@2:71-83, test10.js@1:8-42) --> (test10.js@4:116-120, test10.js@2:56-86)