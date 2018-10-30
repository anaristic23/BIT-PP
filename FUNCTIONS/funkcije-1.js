// function sum(a, b) {
//     var result;

//     result = a + b;

//     return result;

// }
// var final_result;
// sum(3, 5)

// final_result = sum(3, 5);

// console.log(final_result);

// function sum_of_all_arguments () {

//     var result = 0;

//     var i;

//     for (i=0; i<arguments.length;i++){
//         result = result + arguments[i];

//     }
//      return result;

// }

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// var bmax = max(3, 5);
// console.log(bmax);
/*

function odd(a) {
    var s = "";
    if (a % 2 == 0) {
        s = "broj je paran";
    } else {
        s = "broj je neparan";
    }
    return s;
}

var rezultat = odd(11);
console.log(rezultat);
*/
/*
function isThree(a) {
    var s;
    if (a >= 100 && a < 1000) {
        s = "Broj ima tri cifre";
    } else {
        s = "Broj nema tri cifre";
    }
    return s;
}

var rezultat = isThree(99);
console.log(rezultat);*/

/*
function avg(a, b, c, d) {
    return (a + b + c + d) / 4;
}

var rezultat = avg(4, 5, 6, 7);
console.log(rezultat);*/
/*
function hmd(a) {
    var s = "";
    s = s + a;
    var i, j = 0;
    j = s.length;
    return j;
}

var rezultat = hmd(50);
console.log("Broj ima: " + rezultat + " cifre/i");*/
/*
function appe() {
    var i, r = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] == 7) {
            r++;
        }
    }
    return r;
}

var rezultat = appe(5, 10, 11, 7, 7, 7, 71, 15, 6, 7, 8);
console.log(rezultat);*/
/*
function appe(e) {
    var i, r = 0;
    var a = [2, 4, 7, 8, 7, 7, 1];
    for (i = 0; i < a.length; i++) {
        if (e == a[i]) {
            r++;
        }
    }

    return r;
}

var rezultat = appe(2);
console.log(rezultat);*/
/*
function sum_odd() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 != 0) {
            sum = sum + arguments[i];
        }
    }
    return sum;
}

var rezultat = sum_odd(5, 10, 5, 11, 20);
console.log(rezultat);*/
/*
function appe_a(e) {
    var i;
    var counter = 0;

    for (i = 0; i < e.length; i++) {
        if (e[i] == "a" || e[i] == "A") {
            counter++;
        }
    }
    return counter;
}

var rezultat = appe_a("raAec");
console.log(rezultat);*/

//11. spajanje stringa sa unetim brojem puta
/*
function conc(a, b) {
  var i;
  var result = "";
  for (i = 0; i < a; i++) {
    result = result + b;
  }
  return result;
}


var string = conc(4, "dusica");
console.log(string);
*/

// 1.da li je strin ili ne
function isString(a) {
  var result = "";
  if (typeof a == "string") {
    result = "Jeste string";
  } else {
    result = "Nije string";
  }
  return result;
}

var a = isString(4);
console.log(a);

// 2.da li je string i da li je prazan

function strinAndBlank(a) {
  if (typeof a == "string") {
    if (a == "" || a == " ") {
      var b = "Jeste prazan string";
    } else {
      var b = "Nije prazan string";
    }
  } else {
    var b = "Nije string";
  }
  return b;
}
var b = strinAndBlank("");
console.log(b);

//3. spajanje stringa - default 1

function conc2(a, b) {
  var i = 0;
  var res = "";

  do {
    res = res + a;
    i++;
  } while (i < b);

  return res;
}

var a = conc2("ha");
console.log(a);

// broj istih slova u stringu sa zadatim stringom i slovom

function num_of_letter(a, b) {
  var i,
    j = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
      j++;
    }
  }

  return j;
}
var j = num_of_letter("alo", "a");
console.log(j);

//indeks prve pozicije trazenog slova
function index(a, b) {
  var i;
  var res;
  for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
      res = i + 1;
      break;
    } else {
      res = -1;
    }
  }
  return res;
}

var a = index("hjhjjk", "j");
console.log(a);

//indeks poslednje pozicje trazenog slova
function index(a, b) {
  var i;
  var res;
  for (i = a.length; i >= 0; i--) {
    if (a[i] == b) {
      res = i + 1;
      break;
    } else {
      res = -1;
    }
  }
  return res;
}

var a = index("hjhjjdskj", "j");
console.log(a);

//konvertuje string u array i stavlja null gde je razmak
function convertToArray(a) {
  var i;
  var niz = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] == " ") {
      niz[i] = null;
    } else {
      niz[i] = a[i];
    }
  }
  return niz;
}

var array = convertToArray("Alo bre");
console.log(array);

function prostBroj(a) {
  var i;
  var s = "Broj je prost";
  for (i = 2; i < a; i++) {
    if (a % i == 0) {
      s = "Broj nije prost";
      break;
    }
  }

  return s;
}

var s = prostBroj(7);
console.log(s);
