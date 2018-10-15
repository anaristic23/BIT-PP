/*
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 4
*/
var a = [4, 2, 2, -1, 6];

var min_element;
var min_index;
var i;

min_element = a[0];
min_index = 0;

for (i = 1; i < a.length; i++) {
    if (a[i] < min_element) {
        min_element = a[i];
        min_index = i;
    }
}
console.log("min element is " + min_element, ";position is " + min_index);