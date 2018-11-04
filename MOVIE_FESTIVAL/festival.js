'use strict';

(function (){

    function Genre(name){
        this.name = name;

        this.getData = function(){
            var genre = this.name.charAt(0) + this.name.charAt(this.name.length-1);
            return genre.toUpperCase();
        }
    };

    function Movie(title, length, genre){
        this.title = title;
        this.length = length;
        this.genre = genre;

        this.getData = function(){
            return this.title + ", " + this.length  + " min" + ", " + this.genre.getData();
        }
    };
    
    function Program(date){
        this.date = date;
        this.movies = [];

        this.addMovie = function(movie) {
            this.movies.push(movie);
        }

        this.getData = function() {
            var result =  'Date of program: ' + this.date + ', ' + this.movies.length + ' movies';
            for (var index = 0; index < this.movies.length; index++) {
                result += '\n\t\t' + this.movies[index].getData();
            }

            return result;
        }
    };

    function Festival(name){
        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function(program){
            this.listOfPrograms.push(program);
        }

        this.getData = function (){
            var result = "";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                 result += '\n\t' + this.listOfPrograms[i].getData();
            }
            return this.name + result;
        }
    }

    var action = new Genre("action");
    var drama = new Genre("drama");
    var comedy = new Genre("comedy");
    
    var shawshenkRedemption = new Movie("The Shawshenk Redemption", 130, action);
    var deadpool = new Movie("Deadpool", 140, comedy);
    var titanic = new Movie("Titanic", 100, drama);
    
    var programZaPrviDan = new Program('21/12/2018');
    programZaPrviDan.addMovie(shawshenkRedemption);
    programZaPrviDan.addMovie(deadpool);

    var programZaDrugiDan = new Program('03/07/2019')
    programZaDrugiDan.addMovie(titanic);
        
    var fest = new Festival("Fest");
    fest.addProgram(programZaPrviDan);
    fest.addProgram(programZaDrugiDan);
    console.log(fest.getData());

})();



