(function () {
    function foo() { console.log('hi') }
    function bar() { return foo }
    var x = bar()
    x()
})()

// Flow

// 1. (aakash11.js@5:112-115, aakash11.js@2:19-55) --> (aakash11.js@4:102-107, aakash11.js@3:60-89)