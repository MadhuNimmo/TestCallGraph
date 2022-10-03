var functions = {
    log: [f1],
    get func() {
        if (this.log.length === 0) {
            return 'f0'
        }
        else {
            var last = this.log[this.log.length - 1]
            this.log.pop
            return last
        }
    },

    set newFunc(x) {
        this.log.push(x)
    }
}

function f0() {
    console.log('Default')
}

function f1() {
    console.log('One more to go')
    return f0()
}

function f2(x) {
    console.log('Two more to go')
    return x.call()
}

function f3(y) {
    console.log('started')
    return f2(y)
}

f3(functions.func)

//Flow
// 1. (aakash14.js@30:488-496, aakash14.js@23:357-424) --> (aakash14.js@38:564-582, aakash14.js@33:500-562)
//    (aakash14.js@30:488-496, aakash14.js@23:357-424) --> ((aakash14.js@30:488-496, aakash14.js@23:357-424, (aakash14.js@30:488-496, aakash14.js@23:357-424))