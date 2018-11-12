function Person(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
}

Person.prototype.print = function () {
    console.log(this.name + " " + this.surname);
}

var pera = new Person("pera", "peric", "p@gmail.com");
var zika = new Person("zika", "zikic", "z@gmail.com");

function Programmer(name, surname, email, favoriteLanguage) {
    // this.name = name;
    // this.surname = surname;
    // this.email = email;
    Person.call(this, name, surname, email);

    this.favoriteLanguage = favoriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.print = function () {
    var personPrototype = Object.getPrototypeOf(Programmer.prototype);
    var nameSurname = personPrototype.print.call(this);

    return nameSurname + " " + this.favoriteLanguage;
}

var laza = new Programmer("laza", "lazic", "l@gmail.com", "JS");
console.log(laza.print());
