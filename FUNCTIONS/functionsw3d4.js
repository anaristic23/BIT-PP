var result = [];

result = (function(array) {
  var tmp;

  tmp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = tmp;
  return array;
})([4, 5, 11, 9]);

console.log(result);

var result;

result = (function(a, b) {
  var povrsina;
  povrsina = a * b;
  return povrsina;
})(4, 5);
console.log(result);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.

var result = (function(string) {
  var counter = 0;
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "m" || string[i] == "M") {
      newString += "*";
      counter++;
    } else {
      newString = newString + string[i];
    }
  }
  return newString + ", " + counter;
})("prograMming");
console.log(result);

// 4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.

var mailHelper = (function(name, surname) {
  function helper() {
    var result = "";
    result = name + surname + "@gmail.com";
    return result;
  }

  return helper;
})("pera", "peric");
console.log(mailHelper());

// 5. Write a function that returns a function that calculates a decimal value of the given octal number.

var valueConverter = (function(octalNumber) {
  function convertor() {
    var decimalValue = parseFloat(octalNumber);
    return decimalValue;
  }
  return convertor;
})(034);
console.log(valueConverter());

// 6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid.

function errorCallback() {
  console.log("Your password is invalid!");
}
function successCallback() {
  console.log("Your password is cool");
}
var checkPassword = function(password, success, error) {
  function validPassword() {
    if (password.length >= 6) {
      for (var i = 0; i < password.length; i++) {
        if (typeof password[i] == "number") {
          success();
        }
      }
    } else {
      error();
    }
  }
};

checkPassword("abc345", successCallback, errorCallback);

function oddNumbers(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

var filter = function(array, f) {
  var newArray = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (f(array[i])) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
};

var final = filter([5, 8, 9, 89, 12, 44, 31], oddNumbers);
console.log(final);
