var check = '1+7=3';
var answear = true;
var oporetions = '+-*/=';
if (!check.includes('=')) {
    answear = false;
} else {
    for (var i = 0; i< check.length-1; i++) {
        if(oporetions.includes(check[i]) && oporetions.includes(check[i+1])){
            answear = false;
            break;
        }
        if(/^[a-zA-Z]+$/.test(check[i])) {
            answear = false;
            break;
        }
}
}
if (answear) {
    alert("մաթեմատիկական արտահայտություն է")
} else {
    alert('մաթեմատիկական արտահայտություն չէ')
}
alert()