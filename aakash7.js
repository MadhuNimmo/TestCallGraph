function foo() {
    return there(hi) //1.2
}
function bar() {
    return
}
function hi() {
    return hello
}
function hello() {
    return
}
function there(x) {
    var y = x() //1.1
    y()
    return bar
}
var x = foo()
x()
var y = hi()
y()
there(foo)

// flow of bound
// 1. (aakash7.js@14:169-172, aakash7.js@7:70-104) --> (aakash7.js@2:28-37, aakash7.js@13:137-197)

// 2. (aakash7.js@14:169-172, aakash7.js@1:0-39) --> (aakash7.js@2:28-37, aakash7.js@13:137-197)

// 3. (aakash7.js@15:177-180, aakash7.js@10:105-136) --> (aakash7.js@14:169-172, aakash7.js@7:70-104) --> (aakash7.js@2:28-37, aakash7.js@13:137-197)

// 4. (aakash7.js@15:177-180, aakash7.js@4:40-69) --> (aakash7.js@2:28-37, aakash7.js@13:137-197)

// 5. (aakash7.js@19:212-215, aakash7.js@4:40-69) --> (aakash7.js@2:28-37, aakash7.js@13:137-197)

// 6. (aakash7.js@19:212-215, aakash7.js@4:40-69) --> (aakash7.js@18:206-211, aakash7.js@1:0-39)

// 7. (aakash7.js@21:229-232, aakash7.js@10:105-136) --> (aakash7.js@20:224-228, aakash7.js@7:70-104)