// this u globalnom opsegu predstavlja window objekat

// this u globalnim (obicnim, regularnim) funkcijama
// deklaracije i funkcijski izrazi
// je window objekat

// u IIEF this je window objekat

// konstruktor funkcije:
// 1) ako se pozivaju sa new: this je objekat koji kreiramo
// 2) ako se ne pozivaju sa new: this je window objekat


// this isti u outer i inner funkciji
function outer() {
    console.log(this);

    function inner() {
        console.log(this);
    }
}


function Point(x, y) {
    this.x = x;
    this.y = y;

    this.print = function () {

        var that = this;

        function inner() {

            // that mozemo da koritimo bez uvodjenja parametra
            // console.log(that);

            console.log(this);
            // this u untrasnjim funkcijama je globalni objekat

        }

        inner();
        //inner.call(window)

        console.log(this);  // objekat koji kreiramo
    };
}

var p = new Point(4, 5); // {x:4, y:5};
p.print(); // --> print.call(p);


function Seat(number, category) {

    this.number = (function () {
        if (number == undefined) {
            this.number = Math.random();
            // ovo je greska
            // this je u ovom slucaju globalni objekat
        }
    })();
}

// ispravno:
function Seat(number, category) {

    this.number = (function () {
        if (number == undefined) {
            return Math.random();
        }
    })();
}



var obj = { x: 10, y: 20 };
obj.print = function () {
    console.log(this.x, this.y);
}

obj.print();