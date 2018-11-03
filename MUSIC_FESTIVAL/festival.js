'use strict';

(function (){
    console.log("Hi!");

    function Genre(name){
        this.name = name;
        this.getData = function(){
           var genre = this.name.charAt(0) + this.name.charAt(this.name.length-1);
            return genre.toUpperCase();
        }
    };
    
    var action = new Genre("action");
    console.log(action.getData());
    var drama = new Genre("drama");
    console.log(drama.getData());
    var comedy = new Genre("comedy");
    console.log(comedy.getData());

    Movie.prototype = Object.create(Genre.prototype);
    Movie.prototype.constructor = Movie;

    function Movie(title, genre, length){
        this.title = title;
        Genre.call(this, genre);
        this.length = length;
        this.getData = function(){
            return this.title + ", " + this.length  + " min" + ", " + new Genre(getData(action));
        }
    };

    var shawshenkRedemption = new Movie("The Shawshenk Redemption", 130, "action");
    console.log(shawshenkRedemption.getData());

    funtion Program(date, listOfMovies, totalNumberOfMovies){
        this.date = date;
        this.listOfMovies = listOfMovies;
        this.totalNumberOfMovies = totalNumberOfMovies;
    };

    function Festival(name, listOfPrograms, numberOfMoviesInAllPrograms){
        this.name = name;
        this.listOfPrograms = listOfPrograms;
        this.numberOfMoviesInAllPrograms = numberOfMoviesInAllPrograms;
    }

})();