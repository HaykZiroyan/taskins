function betran(n) {
    for (var i = n + 1; i < 2*n; i++) {
    var a = 0;
        for(var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                a = a + 1;
            }
        }
        if (a == 0) {
            console.log(i);
            // break;
        }
    }
}
betran(10);
