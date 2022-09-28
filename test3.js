var x = function f1(fun1) { fun1(); } // 1
var y = function f2(fun2) { fun2(w); } // 2
var w = function () { print("hi"); } // 3
var z = y; // 4
z(x); // 5