var movies = [];

var $button = document.querySelector(".addMovieButton");
var $title = document.querySelector(".title");
var $length = document.querySelector(".length");
var $genre = document.querySelector(".genreSelect");


// add event listener
$button.addEventListener("click", function () {

    // collect form data
    var title = $title.value;
    var length = $length.value;
    var genre = $genre.value;


    // create movie object
    var movieNew = new Movie(title, length, genre);
    console.log(movieNew.getInfo());
    movies.push(movieNew);

    // create output node
    var $movieList = document.querySelector(".movieList");

    var $p = document.createElement("p")
    $p.textContent = movieNew.getInfo()

    $movieList.appendChild($p)


    //reset

    $title.value = "";
    $length.value = "";


});


function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getInfo = function () {
    return this.title + " ," + this.length + " ," + this.genre;
}



//date


var programList = [];

var $date = document.querySelector(".dateForm");
var $buttonDate = document.querySelector(".buttonDate");

$buttonDate.addEventListener("click", function () {

    var date = $date.value;

    var newDate = new Date(date);
    console.log(newDate.getInfo());

    var $putDate = document.querySelector(".putDate");

    var $p = document.createElement("p")
    $p.textContent = newDate.getInfo()

    $putDate.appendChild($p)

});

function Date(date) {
    this.date = date;
}

Date.prototype.getInfo = function () {
    return this.date;
}




