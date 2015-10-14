function scopeTest() {
    if (true) {
        "use strict";
        foo = 'bar';
        console.log(foo);
    }
    console.log("hello " + foo);
}


function scopeTest2() {
    var msg = 'boring number';
    [1,2,3,4,5].forEach(function(n) {
        if (n < 3) {
            return console.log(n + ': ' + msg);
        }
        var msg = 'exciting number';
        console.log(n + ': ' + msg);
    });
}