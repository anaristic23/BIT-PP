var author = {

    name: "Dejan Stojiljkovic",
    gender: "male",
    country: "Serbia",
    city: "Nis",
    yearOfBirth: 1972,
    isYoung: function (currentYear) {
        return currentYear - author.yearOfBirth;
    }


};

var book = {
    name: "Kisni psi",
    genre: "Istorijski roman",
    isNovel: function (quote) {

        return quote;
    },



};

console.log(author.isYoung(2018));
console.log(book.isNovel("This book is a novel"))







// 
//kada se this pojavi u okviru objekta, (pretstavlja tekuci objekat)to se misli na taj objekat. u ovom slucaju Misa
var misa = {
    username: "Misa",
    password: "1254",
    changePassword: function (newPassword) {
        this.password = newPassword;
    }
}

console.log(misa.password);
misa.changePassword("ahfah");
console.log(misa.password);


//


var gisa = {
    username: "Gisa",
    password: "gisacar",
    changePassword: function (newPassword) {
        gisa.password = newPassword;
    }
}

console.log(gisa.password);
gisa.changePassword("genije");
console.log(gisa.password);



//kreiramo f-ju koja poziva objekat

function createUser(userUsername, userPassword) {
    //pravi novi objekat i vraca
    var newUser = {};  //prazan objekat

    newUser.username = userUsername;
    newUser.password = userPassword;
    newUser.changePassword = function (newPassword) {
        newUser.password = newPassword; //moze da stoji i this
    }

    return newUser;
}

var visnja;
visnja = createUser("Visnja", "123456");
console.log(visnja.username);
visnja.changePassword("abs");
console.log(visnja.password);


// this

function User(userUsername, userPassword) {

    // var this = {};  javascript to napravi za nas

    this.username = userUsername;
    this.password = userPassword;

    this.changePassword = function (newPassword) {
        this.password = newPassword; //moze da stoji i this
    }

    // return this;
}

var misa = User("Misa", "12456");
// var misa = new User("Misa", "12456"); 
console.log(misa);
console.log(username);
// console.log(misa.password);


// konstruktor funkcije

// var author = {

//     name: "Dejan Stojiljkovic",
//     gender: "male",
//     country: "Serbia",
//     city: "Nis",
//     yearOfBirth: 1972,
//     isYoung: function (currentYear) {
//         // return currentYear - author.yearOfBirth;
//     }

// };

// var book = {
//     name: "Kisni psi",
//     genre: "Istorijski roman",
//     isNovel: function (quote) {

//         // return quote;
//     }

// };

function Author(name, gender, country, city, yearOfBirth, booksSold) {
    this.name = name;
    this.gender = gender;
    this.country = country;
    this.city = city;
    this.yearOfBirth = yearOfBirth;
    this.booksSold = booksSold;

}

author = new Author("Dejan Stojiljkovic", "male", "Serbia", "Belgrade", 1972, 100);
console.log(author.booksSold, author.name, author.gender, author.city, author.country, author.yearOfBirth);

