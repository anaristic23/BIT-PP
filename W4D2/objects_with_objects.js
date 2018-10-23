var array = [11, 5, 2, 8, 9];

function sort(array) {
    var i;
    var j;
    for (i = 0; i < array.length; i++) {
        var element = array[i];
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < element) {
                var tmp = array[j];
                array[j] = element;
                element = tmp;
            }
        }
        array[i] = element;
    }
}
sort(array);
console.log(array);

var a = new Array(4, 3, 11, 42, 3);
a.sort(function (element1, element2) {
    return element2 - element1;
});
console.log(a);

var a = new Array("C++", "JS", "Python", "PHP", "Java");
a.sort(function (string1, string2) {

    if (string1.length > string2.length) {
        return 1;
    }
    if (string1.length < string2.length) {
        return -1;
    }
    // if (string1.length == string2.length){
    return 0;
    //}

});

console.log(a);

var a = [4, 6, 7, 9, 34];

for (var i in a) {
    console.log(a[i]); //console.log(a)
}

// OBJECT OBJEKAT!!! 

//uvod

var o = {
    x: 10,
    y: 11,
    z: 20
};

console.log(o.x);
console.log(o.property);

for (var property in o) {
    console.log(o[property]);
}

// property

var obj = new Object();
obj.x = 10;
obj.y = 20;

Object.defineProperty(obj, 'z', {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true
});

obj.x = 15;

console.log(obj);

