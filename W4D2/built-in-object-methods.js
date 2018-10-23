// Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// 2, 2, 4, 4,
//     noviNiz.push(3, 3)

var a = new Array(2, 4, 7, 11, -2, 1); // [2, 4, 7,  11, -2, 1]

function duplicatingElements(array) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        // newArray[j] = array[i];
        // j++;
        // newArray[j] = array[i];
        // j++;
        newArray.push(array[i], array[i]);
    }

    return newArray;
}

var result;
result = duplicatingElements(a)
console.log(result);

//Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 

var a = new Array(8, 13, 8, 9, 12, 8, 1, 1, 4, 13);
function removeDuplicates(array) {
    var newArray = [];
    a.sort(function (element1, element2) {
        return element1 - element2;
    });
    for (var i = 0; i < a.length; i++) {

        if (newArray.indexOf(a[i]) == -1) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}
var result;
result = removeDuplicates(a)
console.log(result);
