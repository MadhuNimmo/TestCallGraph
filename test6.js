(function () {
        function foo(x) { x() } //2
        function bar() { console.log('hi') }
        function other() { console.log('other') }
        foo(bar) //1
        foo(other) //1
})()