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
//povezivanje
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technologies, this.licence, this.stars);
}

WebApp.prototype.reactBased = function () {
    for (var i = 0; i < this.technologies.length; i++) {
        // var tech = this.technologies[i];
        if (this.technologies[i] == "React") {
            return true;
        }
    }
    return false;
}


var web = new WebApp("Sajt", "bla.com", ["js"], true, 5);
// web.getData();
console.log(web.reactBased());


function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;







// vrednosti 


// var mobile = new MobileApp("Android", ["khvjgfj", "android"], false, 4);
// console.log(web);
// console.log(mobile);



