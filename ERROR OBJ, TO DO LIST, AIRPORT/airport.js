(function () {
    'use strict'

    function Person(name, surname) {

        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    };

    // Create PERSON

    // var visnjaMrdalj = new Person('Visnja', 'Mrdalj');
    // var milosDoskovic = new Person('Milos', 'Doskovic');

    function Seat(number, category) {

        if (arguments.length == 1) {
            if (typeof arguments[0] == 'number') {
                this.number = number;
                this.category = 'E'
            }
            if (typeof arguments[0] == 'string') {
                this.number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                if (arguments[0] == 'b' || arguments[0] == 'e') {
                    this.category = category;
                } else {
                    console.log('Enter a valid category');
                    this.category = 'E'
                }
            }


        } else {
            this.number = number || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
            this.category = category || 'E'
        }

        this.getData = function () {
            return this.number + ', ' + this.category;
        }
    };

    // Create SEAT

    // var seatOne = new Seat('e');
    // var seatTwo = new Seat(15);

    // console.log(seatOne.getData());
    // console.log(seatTwo.getData());


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        };
    };

    // Create PASSENGER

    // var passengerOne = new Passenger(visnjaMrdalj, seatOne);
    // var passengerTwo = new Passenger(milosDoskovic, seatTwo);

    // console.log(passengerOne.getData());
    // console.log(passengerTwo.getData());
    // console.log(passengerTwo);


    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
        this.totalPassengers = 0;

        this.addPassenger = function (newPassenger) {
            this.listOfPassengers.push(newPassenger);
            this.totalPassengers++;
        };

        this.getData = function () {
            var dataString = this.date.toLocaleDateString() + ',\t' + this.relation + '\n';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                var passenger = this.listOfPassengers[i];
                // dataString += '\t\t\t' + passenger.getData() + '\n';
                dataString += '\t\t\t' + (i + 1) + ', ' + passenger.seat.category + ', ' + passenger.person.getData() + '\n';
            }
            return dataString;
        };
    };



    // Create FLIGHT and add passenger

    // var beogradCuba = new Flight('Belgrade-Havana', new Date('2018-12-06'))

    // beogradCuba.addPassenger(passengerOne);
    // beogradCuba.addPassenger(passengerTwo);

    // console.log(beogradCuba.getData());

    // console.log(beogradCuba.listOfPassengers);



    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];
        this.numOfAllPassengers = 0;

        this.addFlight = function (newFlight) {
            this.listOfFlights.push(newFlight);
            this.numOfAllPassengers += newFlight.totalPassengers;

        };

        this.getData = function () {
            var data = 'Airport: ' + this.name + ', total passengers: ' + this.numOfAllPassengers + '\n';

            for (var i = 0; i < this.listOfFlights.length; i++) {
                var flight = this.listOfFlights[i];
                data += flight.getData();
            }
            return data;
        }
    };

    // Create AIRPORT

    var airportNikolaTesla = new Airport();

    // airportNikolaTesla.addFlight(beogradCuba);


    // TEST!!!!

    // console.log(airportNikolaTesla.listOfFlights);



    function createFlight(relation, date) {
        return new Flight(relation, date);
    }


    function createPassenger(name, surname, seatNumber, category) {

        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }


    var firstFlight = createFlight('Belgrade - New York', new Date('Oct 25 2019'));
    var secondFlight = createFlight('Barcelona - Belgrade', new Date('Nov 11 2019'));





    var passenger1 = createPassenger('John', 'Snow', 1, 'b');
    var passenger2 = createPassenger('Cersei', 'Lannister', 2, 'b');
    var passenger3 = createPassenger('Daenerys', 'Targeryan', 14);
    var passenger4 = createPassenger('Tyrion', 'Lannister');

    // console.log(passenger1.getData());




    firstFlight.addPassenger(passenger1);
    firstFlight.addPassenger(passenger2);
    secondFlight.addPassenger(passenger3);
    secondFlight.addPassenger(passenger4);

    airportNikolaTesla.addFlight(firstFlight);
    airportNikolaTesla.addFlight(secondFlight);





    console.log(airportNikolaTesla.getData());
    // console.log(seatOne.getData())






})();