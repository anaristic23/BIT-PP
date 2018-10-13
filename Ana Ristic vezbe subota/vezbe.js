var a = 5;
var b = 9;

function maxDva(n1, n2) {
    var result;
    if (n1 > n2) {
        result = n1;
    } else {
        result = n2;
    } return result;
}
var x;
x = maxDva(5, 9)
console.log(x)


/* */
function digits(n1) {
    var result;
    if (n1 > 99 && n1 < 1000) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

var a = 43;
var x = digits(a);
console.log(x);

// Write a program that calculates an arithmetic mean of four numbers.

var a = [1, 2, 3, 4];

function aritmeticValue(arr) {
    var result;
    var i;
    var x = 0;
    for (i = 0; i < a.length; i++) {
        x += (arr[i]) / 4
        result = x;

    }
    return result
}
var y = aritmeticValue(a);
console.log(y)

// Write a program that calculates a number of digits of a given number. 


var a = 345;

//a+ "" --> "345"
// .length -->3

// function digits(n1) {
//     var result;
//     if (n1 != 0 && n1 % 10 == 0) {
//         result = 
//     }
// }

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;


function appearance(a, e) {
    var i;

    var ind = [];
    var j = 0;

    var counter = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] === e) {
            //counter += 1;
            ind[j] = i;
            j++;
        }
    }

    // return counter;
    return ind;
}
var x = appearance(a, e)
console.log(x)