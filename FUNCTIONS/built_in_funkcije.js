function insert(a, b, c) {
  var string = "";
  var i;

  if (typeof c == "number") {
    for (i = 0; i < a.length; i++) {
      if (i == c) {
        string = string + " " + b + " ";
      }
      string = string + a[i];
    }
  } else {
    for (i = 0; i < a.length; i++) {
      if (i == 0) {
        string = b + " " + string;
      }
      string = string + a[i];
    }
  }

  return string;
}

var a = insert("alo", "bro");
console.log(a);
