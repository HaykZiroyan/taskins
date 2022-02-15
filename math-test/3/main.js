function minDifference(arr , n) {
    var sum = 0;
    for (var i = 0; i < n; i++)
        sum += arr[i];
    var y = parseInt(sum / 2) + 1;
    var dp = Array(y).fill(false), dd = Array(y).fill(false);
    for (var i = 0; i < y; i++) {
        dp[i] = dd[i] = false;
    }
    dd[0] = true;
    for ( var i = 0; i < n; i++){
        for (var j = 0; j + arr[i] < y; j++) {
            if (dp[j])
                dd[j + arr[i]] = true;
        }
        for (var j = 0; j < y; j++) {
            if (dd[j])
                dp[j] = true;
            dd[j] = false; 
        }
    }
    for (var i = y - 1; i >= 0; i--) {
        if (dp[i])
            return (sum - 2 * i);
    }

    
    return 0;
}

    var arr = [ 1, 6, 11, 5 ];
    var n = arr.length;
    document.write("The Minimum difference of 2 sets is " + minDifference(arr, n) + '\n');

