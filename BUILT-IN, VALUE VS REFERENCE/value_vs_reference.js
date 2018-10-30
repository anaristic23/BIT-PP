var x = 10;
var y = 12;
var z = x; // z <-- 10

console.log(x, y, z);


function sum(a, b) {
    // a <-- 5, b <-- 10
    return a + b;
}

var n1 = 5;
var n2 = 10;

var result;
result = sum(n1, n2);
console.log(result);

// primitivni tipovi:

// 1) Number -> vazi prenos po vrednosti
// 2) Boolean -> vazi prenos po vrednosti
// 3) String -> tretiramo kao primitivan, jer je nepromenljiv -> zato vazi prenos po vrednosti
// 4) undefined -> vazi prenos po vrednosti
// 5) null -> vazi prenos po vrednosti


var a = [1, 4, 5, 7];
var b = [11, 4, 50, 7];
var c = a;  // prenos po referenci: c pokazuje na niz 'a' koji je [1, 4, 5, 7]

a[0] = 11;
console.log(c); // [11, 4, 5, 7]
c[2] = 50;
console.log(c); // [11, 4, 50, 7]
console.log(a); // [11, 4, 50, 7]

console.log(a == c); // true
console.log(a == b); // false   // isto i za poredjenje sa '==='

b = c;  // sada i 'b' pokazuje na isti blok u memoriji kao i 'c'; tj pokazuje na 'a'

console.log(a === b); // true



var a = [4, 5, 6]
function print(array) {
    // array --> a = [4, 5, 6]
    array.push(56);
    console.log(array); // [4, 5, 6, 56]
}

print(a);
console.log(a); // [4, 5, 6, 56]



//// Objekat ////


var point1 = {
    x: 20,
    y: 30
};

var point2 = {
    x: 20,
    y: 30
};


// JSON - string reprezentacija objekta. moze da se koristi za uporedjivanje objekata

var point1AsString = JSON.stringify(point1);
var point2AsString = JSON.stringify(point2);
console.log(point1AsString == point2AsString);
//////////////////////////////////////////////////////


var point3 = point1;  // point3 je referenca na memoriju gde se nalazi point1

// point1 --> { x: 20, y: 30 } <-- point3

console.log(point1 == point2); // false
console.log(point1 == point3); // true

point1.x = 40;
point3.z = 50;

console.log(point1);

/////////////////////////////////////////////////////////

function extend(obj) {

    // obj --> o = { x: 0, y: 0, description: 'super point' }
    obj.description = 'super point';
}

var o = {
    x: 0,
    y: 0
};

extend(o);

console.log(o);