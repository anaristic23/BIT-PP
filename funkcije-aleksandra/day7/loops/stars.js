var v, k;
var n = 5;
var s;

for (v = 0; v < n; v++) {
    if (v == 0 || v == n - 1) {
        s = "";
        for (k = 0; k < n; k++) {
            s += "*";
        }
    } else {
        s = "*";
        for (k = 1; k <= n - 2; k++) {
            s += " "
        }
        s += "*";
    }
    console.log(s);
}

//x
var i, j;
var n = 11;
var s;

for (i = 0; i < n; i++) {
    s = " ";
    for (j = 0; j < n; j++) {
        if (j == i || i + j == n - 1) {
            s += "*";
        } else {
            s += " ";
        }
    }
    console.log(s);
}

//5
var i, j;
var n = 5;
var s;

for (i = 0; i < n; i++) {
    s = " ";
    for (j = 0; j < n; j++) {
        if (i == (n - 1) / 2 || j == (n - 1) / 2) {
            s += "*";
        } else {
            s += " ";
        }
    }
    console.log(s);
}

//6
var niz = [5, 3, 7];
var i, j, s;

for (i = 0; i < niz.length; i++) {
    s = "";
    for (j = 0; j < niz[i]; j++) {
        s += "*";
    }
    console.log(s);
}


