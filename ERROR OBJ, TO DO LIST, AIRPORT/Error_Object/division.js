var a = 5;
var b = '0';

var result;

/*
if (b != 0) {
    result = a / b;
    console.log(result);
} else {
    console.log("Division by 0!");
}
*/

try {

    if (typeof a != 'number' || typeof b != 'number') {
        var ourTypeError = new TypeError('We expect a and b to be numbers!');
        throw ourTypeError;
    }
    if (b != 0) {
        result = a / b;
        console.log(result);
    }
    else {
        var divisionError = new Error('Division by 0!');
        throw divisionError;
    }

} catch (error) {

    if (error instanceof TypeError) {
        console.log('Type Error: ', error.message)
    } else {
        console.log('Error: ', error.message);
    }

}



var array = [3, 4, 5, 6, 7];
var index = 2;
try {
    if (typeof index != 'number') {
        throw new TypeError('index has to be number!');
    }
    if (index < 0 || index >= array.length) {
        throw new RangeError('index not in range');
    }
    else {
        console.log(array[index]);
    }

} catch (error) {
    if (error instanceof TypeError) {
        console.log('Type Error: ', error.message);
    } else {
        console.log('Range Error: ', error.message);
    }
} finally {
    console.log('Try again!');

}