var movies = [];
function addMovie(movie) {
    movies.push(movie);
}
function getMovies() {
    return movies;
}

var programs = [];

var createMovieButton = document.querySelector('#create-movie-button');
createMovieButton.onclick = function() {
    var $title = document.querySelector('#title');
    var $duration = document.querySelector('#duration');
    var $genre = document.querySelector('#genre');
    
    var movie = new Movie(
        $title.value,
        $duration.value,
        new Genre($genre.value)
    );

    addMovie(movie);

    printMoviesList(getMovies());
}

function printMoviesList(movies) {
    var $list = document.querySelector('#movies-list');

    $list.innerHTML = '';
    for (var index = 0; index < movies.length; index++) {
        var $li = document.createElement('li');
        $li.textContent = movies[index].getData();

        $list.appendChild($li);
    }
}


var $createProgramButton = document.querySelector('#create-program-button');
$createProgramButton.onclick = function() {
    var $datum = document.querySelector('#date');

    var program = new Program($datum.value);

    programs.push(program);
    console.log(programs);
}