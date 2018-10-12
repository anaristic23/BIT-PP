// var e = 6;
// var a = [7, 22, 1, -9, 23, 6, 8];

// var res = a.indexOf(e);

// console.log(res);

var e = 6;
var a = [7, 22, 1, -9, 23, 6, 8];

var i;
var ind;

for (i = 0, ind = false; ind == false && i < a.length; i++) {
    if (a[i] === e) {
        ind = true;
    }
}
if (ind == false) {
    console.log("not in the array");
} else {
    console.log("on index " + (i - 1));
}
