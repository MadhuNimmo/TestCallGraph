var m = function () { return "mmm"; } // 1
var x = function () { return m; } // 2
var y = function () { return x; } // 3
var z = y; // 4
var n = z(); // 5 -- bound 1
var o = n() // 6 -- bound 2
o.call(this); // 7 -- bound 3

//Flow
// 1. (test12.js@5:145-148, test12.js@3:90-115)
// 2. (test12.js@6:174-177, test12.js@2:51-76) --> (test12.js@5:145-148, test12.js@3:90-115)
// 3. (test12.js@7:194-206, test12.js@1:8-37) --> (test12.js@6:174-177, test12.js@2:51-76) --> (test12.js@5:145-148, test12.js@3:90-115)