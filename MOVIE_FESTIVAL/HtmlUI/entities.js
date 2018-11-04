"use-strict";

function Genre(name) {
  this.name = name;

  this.getData = function() {
    var genre = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
    return genre.toUpperCase();
  };
}

function Movie(title, length, genre) {
  this.title = title;
  this.length = length;
  this.genre = genre;

  this.getData = function() {
    return (
      this.title + ", " + this.length + " min" + ", " + this.genre.getData()
    );
  };
}

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
