object = ["-->", '>>-->' , '<--<<', '>>--><--<<', '>>-']
function counts(obj) {
    var count = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] == '>>-->'  || obj[i] == '<--<<') {
            count++
        }
    }
    console.log(count);
}

counts(object);