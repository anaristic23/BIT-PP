/*
Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var arr = [1, 4, 2, 2, -1, 6];

var i;
var min = arr[0];
var min_index = 0;
var min2;

//min
for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        min_index = i;
        console.log("min is " + min);
    }
}

min2 = arr[0];
for (i = 1; i < arr.length; i++) {
    if (min2[i] > min[i] && arr[i] < min2) {
        min2 = arr[i];

    }
}
console.log("firt element larger than min is " + min2);