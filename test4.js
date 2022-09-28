function f1(p) { p(); }
var m = f1; // copies f1 to m
function f2() { return; }
var n = f2; // copies f2 to n
m(n);