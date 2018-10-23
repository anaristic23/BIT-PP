//Write a function that prints all numbers between two provided numbers. 

function printNumbers(num1, num2) {

    for (var i = num1; i < num2; i++) {
        console.log(i);
    }
}
printNumbers(1, 17);

//Write a function that checks if the number is positive or negative.

function isPositive(number) {
    if (number >= 0) {
        console.log("The number is positive!");
    }
    if (number < 0) {
        console.log("The number is negative!");
    }
}
isPositive(-2);

// Write a function that outputs array of every second character from the provided string. 
// In case that string is not provided outputs array empty array. 
// Input: "123456"

function everySecondCharacter(string) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < string.length; i += 2) {
        newArray[j] = string[i];
        j++;
    }
    return newArray;
}
var result;
result = everySecondCharacter("123456");
console.log(result);

// Write a function that checks if the first and the last element in the array or string are the same.

function sameElements(array) {

    for (var i = 0; i < array.length; i++) {
        if (array[0] === array[array.length - 1]) {
            return true;
        } else {
            return false;
        }
    }
}
var result = sameElements("1234561");
console.log(result);

// Write a function that checks if the two arrays are equal. 
//Assume that arrays are equal if they have all the same elements. 
//Also assume that two compared arrays have the same number of elements.


