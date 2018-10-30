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
        return true;
    }
    if (number < 0) {
        return false;
    }
}
var result = isPositive(2);
console.log(result);


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

function equalArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

var result = equalArrays([4, 5, 3, 4, 5], [4, 5, 3, 4, 5]);
console.log(result);

// Write a function that reverses a word or sentence.
// Cover cases if sentence is not provided.

function reverseWord(word) {
    var splitString;
    var reverseArray;
    var joinArray;


    splitString = word.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");



    return joinArray;

}
var result = reverseWord("125654");
console.log(result);

// Write a function that prints out number of input arguments of the function.

function numberOfInputs(argument1) {
    console.log(arguments.length);
}
numberOfInputs(3, 4, 6, 8);

// Write a function that sets some global variable to the new value.

var global = "string";

function changeVariable() {
    global = "not global anymore";
    return global;
}

changeVariable();
console.log(global);

// Write a function that replaces all white spaces from string with dash (-). 

function dash(string) {

    return "Write a function with dashes".split(" ").join("-");
}
var result = dash("Write a function with dashes");
console.log(result);

// Write object representing a book, an animal and a person. 
// Create constructor functions for same entities. 


var book = {
    name: "Moja genijalna prijateljica",
    genre: "Drama",
    published: 2016,
    publishingYear: function (currentYear) {
        return currentYear - this.published;
    }
};

var person = {
    name: "Paulo Coelho"
    profession: "Novelist",
    nationality: "Brazilian",
    years: 71
}

var dog = {
    name: "Zoi"
    dogtype: "Labrador",
    years: 3,
    color: "Golden"
}

// --------------------------------------------


function Book(name, genre, year) {
    this.name = name;
    this.genre = genre;
    this.published = year;
    this.publishingYear = function (currentYear) {
        return currentYear - this.published;
    }
}

var genijalnaPrijateljicaBook = new Book("Moja genijalna prijateljica", "Drama", 2018);
var influencePeopleBook = new Book("asdf", "eee", 2018);

console.log(genijalnaPrijateljicaBook);
console.log(influencePeopleBook);


console.log(console.log('JS'));