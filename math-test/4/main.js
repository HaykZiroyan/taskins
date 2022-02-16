// function isOperand(c){
//     return (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0));
// }
 
// function value(c){
//     return (c.charCodeAt(0) - '0'.charCodeAt(0));
// }
 
// function evaluate(exp) {
//     if (exp.length == 0) return -1;
//     let res = value(exp[0]);
   
//     for (let i = 1; i<exp.length; i += 2){
//         let opr = exp[i], opd = exp[i+1];
   
//         if (isOperand(opd) == false) return -1;
   
//         if (opr == '+') res += value(opd);
//         else if (opr == '-') res -= value(opd);
//         else if (opr == '*') res *= value(opd);
//         else if (opr == '/') res /= value(opd);
   
//         else                 return -1;
//     }
//     return res;
// }
// function def(str) {
//     const obj = str.split("=");
//     return obj
// }
// var exp = def('2+2=a');
// let ress = evaluate(exp[1]);
// if(ress == -1) document.write(expr1+" is Invalid<br>");
// else     document.write("Value of "+exp+" is "+ress+"<br>");

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