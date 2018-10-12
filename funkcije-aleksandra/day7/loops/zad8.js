var a = [2, 4, 7, 8, 7, 7, 1, 7];
var e = 7;

var len = a.length;
var result = 0;

while (len >= 0) {
    len--;
    if (a[len] === e) {
        result++
    }
}

console.log(result);