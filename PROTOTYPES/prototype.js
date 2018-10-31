function Person(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.email= email
    }
    Person.prototype.print = function(){
        return this.name + " "+ this.surname;
    }

    var pera = new Person('pera', 'peric', 'p@gmail.com');
    var zika = new Person('zika', 'zikic', 'z@gmail.com');

function Programmer(name, surname, email, favouriteLanguage){

        Person.call(this, name, surname, email);

        this.favouriteLanguage = favouriteLanguage;
    }

    Programmer.prototype = Object.create(Person.prototype);
    Programmer.prototype.constructor = Programmer;
    Programmer.prototype.print = function(){
        //ime, prezime + programski jezik

        var personPrototype = Object.getPrototypeOf(Programmer.prototype);
        var nameSurname = personPrototype.print.call(this);

        return nameSurname + " " + this.favouriteLanguage;
    }

    var laza = new Programmer('laza', 'lazic', 'l@gmail.com', 'JS');
    console.log(laza.print());