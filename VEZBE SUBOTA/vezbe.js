var a = 5;
var b = 9;

function maxDva(n1, n2) {
  var result;
  if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }
  return result;
}
var x;
x = maxDva(5, 9);
console.log(x);

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

function aritmeticValue(arr) {
  var suma = 0;

  for (var i = 0; i < a.length; i++) {
    suma += arr[i];
  }

  var as = suma / arr.length;
  
  return as;
}

var a = [1, 2, 3, 4];
var y = aritmeticValue(a);
console.log(y);

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
var x = appearance(a, e);
console.log(x);

/* ============================================
    Write a program that draws a horizontal chart representing three given values. 
    For example, if values are 5, 3, and 7, the program should draw:
    * * * * *
    * * *
    * * * * * * *
   ============================================ */
function stampajRedZvezdica(brojZvezdicaURedu) {
  var red = "";

  for (var i = 0; i < brojZvezdicaURedu; i++) {
    red += "* ";
  }

  return red;
}

var x = stampajRedZvezdica(5);
console.log(x);

console.log(stampajRedZvezdica(3));
console.log(stampajRedZvezdica(7));
