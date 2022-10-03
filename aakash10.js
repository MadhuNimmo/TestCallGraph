(function () {
    function foo(x) { x() }
    function bar() { console.log('hi') }
    function other() { console.log('other') }
    foo(bar)
    foo(other)
})()

// Flow

//1. (aakash10.js@2:37-40, aakash10.js@3:47-83) --> (aakash10.js@5:134-142,aakash10.js@2:19-42)

// 2. (aakash10.js@2:37-40, aakash10.js@4:88-129) --> (aakash10.js@5:134-142, aakash10.js@2:19-42)