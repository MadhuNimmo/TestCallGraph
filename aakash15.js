function done() {
    console.log("Done")
}

function almost(x) {
    console.log("Almost Done")
    x.apply()
}

almost(done)

//Flow
// 1. (aakash15.js@7:101-109, aakash15.js@1:0-43) --> (aakash15.js@10:114-126, aakash15.js@5:45-112)