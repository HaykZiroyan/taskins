// function minDifference(arr , n) {
//     var sum = 0;
//     for (var i = 0; i < n; i++)
//         sum += arr[i];
//     var y = parseInt(sum / 2) + 1;
//     var dp = Array(y).fill(false), dd = Array(y).fill(false);
//     for (var i = 0; i < y; i++) {
//         dp[i] = dd[i] = false;
//     }
//     dd[0] = true;
//     for ( var i = 0; i < n; i++){
//         for (var j = 0; j + arr[i] < y; j++) {
//             if (dp[j])
//                 dd[j + arr[i]] = true;
//         }
//         for (var j = 0; j < y; j++) {
//             if (dd[j])
//                 dp[j] = true;
//             dd[j] = false; 
//         }
//     }
//     for (var i = y - 1; i >= 0; i--) {
//         if (dp[i])
//             return (sum - 2 * i);
//     }

    
//     return 0;
// }

//     var arr = [ 1, 6, 11, 5 ];
//     var n = arr.length;
//     document.write("The Minimum difference of 2 sets is " + minDifference(arr, n) + '\n');

    // Javascript program for the above approach
     
    // Function to return minimum difference
    // between two subarray sums


    function minDiffSubArray(arr, n) {
      var a;
      // To store prefix sums
      let prefix_sum = new Array(n);
      
      // Generate prefix sum array
      prefix_sum[0] = arr[0];
    //   arr1[0] = 0;
      for(let i = 1; i < n; i++) {
        prefix_sum[i] = prefix_sum[i - 1] + arr[i];
        // for(let j = 0; j <= i; j++) {
        //     arr1[i] = arr1[i].push(j);
        // }
      }

 
      // To store suffix sums
      let suffix_sum = new Array(n);
 
      // Generate suffix sum array
      suffix_sum[n - 1] = arr[n - 1];
    //   for(let i = 0; i <= n; i++)
    //         arr2[i] = arr2[i].push(n-i);
    //   arr2[0] = [3];
      for(let i = n - 2; i >= 0; i--)
        suffix_sum[i] = suffix_sum[i + 1] + arr[i];
        
        
 
      // Stores the minimum difference
      let minDiff = Number.MAX_VALUE;
 
      // Traverse the given array
      for(let i = 0; i < n - 1; i++)
      {
        // Calculate the difference
        let diff = Math.abs(prefix_sum[i] - suffix_sum[i + 1]);
 
        // Update minDiff
        if (diff < minDiff)
          minDiff = diff;
          a = i
        }
 
        // Return minDiff
        return a;
    }
     

    let arr = [7, 9, 5, 10, 2];
    let n = arr.length;
    var arr1 =  new Array(n);
    var arr2 =  new Array(n);
    for(let i = 0; i < n; i++) {
        arr1[i] = new Array();
        for(j = 0; j<=i;j++)
            arr1[i].push(j)

    }
    for(let i = 0; i < n; i++) {
        arr2[i] = new Array();
        for(j = n; j>=n-i;j--)
            arr2[i].push(j-1);

    }

    var numb = minDiffSubArray(arr, n);
    var subarray1 = new Array();
    var subarray2 = new Array();
    var subarray = new Array();
    for (var i = 0; i < n-numb; i++) {
      subarray1[i] = arr[i];
    }
    var counts = 0;
    for (var i = 0; i < n; i++) {
      if(!subarray1.includes(arr[i])) {
        subarray2[counts] = arr[i];
        counts++;
      }
    }
  

    document.write('fist subarray is: ' + subarray1 + '<br>');
    document.write('second subarray is: ' + subarray2 + '<br>');
