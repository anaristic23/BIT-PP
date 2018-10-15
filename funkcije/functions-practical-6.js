var countVowels = function(string) {
  var counter = 0;
  var i;

  for (i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        counter++;
        break;
      default:
    }
  }

  return counter;
};

var count = countVowels("Dobro vece");
console.log(count);

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var upariNizove = function(niz1, niz2) {
  var niz3 = [];
  var i, j;

  for (j = 0, i = 0; i < niz1.length && i < niz2.length; i++) {
    niz3[j] = niz1[i];
    j++;
    niz3[j] = niz2[i];
    j++;
  }

  return niz3;
};

var nizovi = upariNizove(["a", "b", "c"], [1, 2, 3]);
console.log(nizovi);

var rotate = function(niz, k) {
  var i, j;
  var niz2 = [];
  for (j = 0, i = k; i < niz.length; i++, j++) {
    niz2[j] = niz[i];
  }
  for (j = niz2.length, i = 0; i < k; i++, j++) {
    niz2[j] = niz[i];
  }

  return niz2;
};
var nizovi = rotate([1, 2, 3, 4, 5, 6], 2);
console.log(nizovi);

var brojUNiz = function(broj) {
  var niz = [];
  var i;
  var string = "" + broj;
  for (i = string.length - 1; i >= 0; i--) {
    niz[i] = broj % 10;
    broj = parseInt(broj / 10);
  }

  return niz;
};
var nizovi = brojUNiz(1223123125);
console.log(nizovi);

var multiplication = function() {
  var i, j;
  var string = "";
  for (i = 1; i <= 12; i++) {
    for (j = 1; j <= 12; j++) {
      string = string + i + " * " + j + " = " + i * j + "\t";
    }
    string = string + "\n";
  }

  return string;
};
var mul = multiplication();
console.log(mul);

var celToFah = function(degrees) {
  var fah = degrees * (9 / 5) + 32;
  return fah;
};
var cel = celToFah(40);
console.log(cel);

var maxNumber = function(niz) {
  var i;
  var max;
  var niz2 = [];
  var parse;
  for (i = 0, j = 0; i < niz.length; i++) {
    parse = parseFloat(niz[i]);
    if (!(isNaN(parse) == true)) {
      niz2[j] = niz[i];
      j++;
    }
  }
  max = niz2[0];
  for (i = 0; i < niz2.length; i++) {
    if (max < niz2[i]) {
      max = niz2[i];
    }
  }
  return max;
};
var max = maxNumber([1, 5, 29, null, NaN, undefined, "", 2, 30]);
console.log(max);
