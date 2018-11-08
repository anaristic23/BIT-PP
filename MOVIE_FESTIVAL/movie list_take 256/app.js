var $button = document.querySelector('.create-movie');
var $title = document.querySelector('.movie-title');
var $length = document.querySelector('.movie-length');
var $genre = document.querySelector('.select-genre');
var $div = document.querySelector(".movie-list");
var $chooseDate = document.querySelector(".choose-date");
var $createProgram = document.querySelector(".create-program");
var $divProgram = document.querySelector(".programDiv");

//PRVI DEO 


$button.addEventListener('click', function (event) {


    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getGenreData = function () {
        var firstChar = this.name[0].toUpperCase();
        var lastChar = this.name[this.name.length - 1].toUpperCase();
        return firstChar + lastChar;
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }



    Movie.prototype.getMovieData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getGenreData();
    }

    var genre = new Genre($genre.value);
    var movie = new Movie($title.value, $length.value, genre);


    function addMovieToList(movieInstance) {

        var $p = document.createElement("p");
        $p.textContent = movieInstance.getMovieData();
        $div.appendChild($p);

    }

    addMovieToList(movie);

})


//DRUGI DEO


$createProgram.addEventListener('click', function (event) {

    Date.prototype.mojDatum = function () {
        var day = this.getDate()
        var month = this.getMonth() + 1
        var year = this.getFullYear()

        return day + "." + month + "." + year + "."
    }

    function Program(dateInput, listOfMovies, numberOfMovies) {
        this.date = new Date(dateInput);
        this.listOfMovies = listOfMovies;
        this.numberOfMovies = numberOfMovies;

    }

    Program.prototype.getProgramData = function () {

        return this.date.mojDatum() + ", " + "duration: TBA";
    }

    var program = new Program($chooseDate.value);

    function addMovieToProgramLIst(programInstance) {

        var $p = document.createElement("p");
        $p.textContent = programInstance.getProgramData();
        $divProgram.appendChild($p);

    }

    addMovieToProgramLIst(program);

})