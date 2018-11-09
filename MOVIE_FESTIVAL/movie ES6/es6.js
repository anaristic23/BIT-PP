(function () {

    function Genre(name) {
        this.name = name;
    };

    Genre.prototype.getData = function () {
        const genre = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
        return genre.toUpperCase();
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    };

    Movie.prototype.getData = function () {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    };



    function Program(date) {
        this.date = date;
        this.movies = [];

        this.addMovie = function (movie) {
            this.movies.push(movie);
        }
    };

    Program.prototype.getData = function () {
        let result = 'Date of program: ' + this.date + ', ' + this.movies.length + ' movies';
        for (let index = 0; index < this.movies.length; index++) {
            result += '\n\t\t' + this.movies[index].getData();
        }

        return result;
    };

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
    };

    Festival.prototype.getData = function () {
        let result = "";
        for (let i = 0; i < this.listOfPrograms.length; i++) {
            result += '\n\t' + this.listOfPrograms[i].getData();
        }
        return this.name + result;
    };

    const action = new Genre("action");
    const drama = new Genre("drama");
    const comedy = new Genre("comedy");

    const shawshenkRedemption = new Movie("The Shawshenk Redemption", 130, action);
    const deadpool = new Movie("Deadpool", 140, comedy);
    const titanic = new Movie("Titanic", 100, drama);

    const programZaPrviDan = new Program('21/12/2018');
    programZaPrviDan.addMovie(shawshenkRedemption);
    programZaPrviDan.addMovie(deadpool);

    const programZaDrugiDan = new Program('03/07/2019')
    programZaDrugiDan.addMovie(titanic);

    const fest = new Festival("Fest");
    fest.addProgram(programZaPrviDan);
    fest.addProgram(programZaDrugiDan);
    console.log(fest.getData());

})();



