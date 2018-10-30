(function () {
    'use strict'

    function dateString(dateObject) {
        var dd = dateObject.getDate();
        var mm = dateObject.getMonth() + 1;
        var yyyy = dateObject.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '.' + mm + '.' + yyyy;

    };

    var Continent = {
        ASIA: 'AS',
        EUROPE: 'EU',
        AFRICA: 'AF',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA',
        AUSTRALIA: 'AU',
        ANTARTICA: 'AN'
    };

    Object.freeze(Continent);


    function Country(name, odds, continent) {

        this.name = name;
        this.odds = odds;
        // if(continent )
        this.continent = continent;

    }

    var serbia = new Country('SR', 0.5, Continent.EUROPE);

    function Person(name, surname, dateOfBirth) {

        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;

        this.age = function () {
            var currentYear = (new Date()).getFullYear();
            var yearOfBirth = this.dateOfBirth.getFullYear();

            return currentYear - yearOfBirth;
        };

        this.getData = function () {
            return this.name + ' ' + this.surname + ' ' + dateString(this.dateOfBirth);
        };
    };


    var anaRistic = new Person('Ana', 'Ristic', new Date('1999-12-31'));
    // console.log(anaRistic.getData());

    function Player(person, betAmount, country) {

        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        this.getData = function () {
            return this.country.name + ', ' + (this.country.odds * this.betAmount).toFixed(2) + ' eur, ' +
                this.person.name + ' ' + this.person.surname + ', ' + this.person.age() + ' years';
        };
    }

    var player1 = new Player(anaRistic, 1000, serbia);
    console.log(player1.getData());

    function Address(country, city, postalCode, street, number) {

        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        this.getData = function () {
            return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country.name;
        };

        this.shortData = function () {
            return this.street + ', ' + this.postalCode + ' ' + this.city;
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.sumOfAllBets = 0;

        this.addPlayer = function (newPlayer) {
            this.listOfPlayers.push(newPlayer);
            this.sumOfAllBets++;
        }

        this.getData = function () {
            return this.address.shortData() + ', sum of all bets:' + this.sumOfAllBets + 'eur';
        }

    }



})();



var newDate = (new Date('2018-05-31')).getFullYear();
console.log(newDate);