function Genre(name) {
    this.name = name;
    this.getData = function () {
        var firstIndex = 0;
        var lastIndex = this.name.length - 1;
        var result = this.name.charAt(firstIndex) + this.name.charAt(lastIndex);

        return result.toUpperCase();
    }
}
var action = new Genre("action");
console.log(action.getData())


function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length
}

function Program(date, listOfMovies, totalNumberOfMovies) {
    this.date = date;
    this.listOfMovies = listOfMovies;
    this.totalNumberOfMovies = totalNumberOfMovies;
}

