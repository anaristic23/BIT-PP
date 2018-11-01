function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;

}



WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technologies, this.licence, this.stars);
}


WebApp.prototype.reactBased = function () {

    for (var i = 0; i < this.technologies.length; i++) {
        if (this.technologies[i] == "React") {
            return true;
        }
    }

    return false;

}

// WebApp.prototype.isCCLicence = function (){

// }

// WebApp.prototype.like = function (){

// }

// WebApp.prototype.showStars = function (){

// }


MobileApp.prototype.getData = function () {
    console.log(this.name, this.platforms, this.licence, this.stars);
}

MobileApp.prototype.forAndroid = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i] == 'Android') {
            return true;
        }
    }
    return false;
}


// MobileApp.prototype.isCCLicence = function () {

// }

// MobileApp.prototype.like = function () {

// }

// MobileApp.prototype.showStars = function () {

// }


var webApp = new WebApp('ime', 'bla.com', ["JS"], true, 5);
webApp.getData();

console.log(webApp.reactBased());

var mobileApp = new MobileApp('ime', ['platforma', 'Android'], true, 4);
mobileApp.getData();
console.log(mobileApp.forAndroid());
