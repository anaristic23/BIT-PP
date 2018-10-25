"use strict";

(function () {
    console.log("Hi");

    function Product(productID, name, price, date) {

        this.productID = productID;

        this.name = name;
        this.price = price;
        this.expirationDate = date;

        this.getInfo = function () {
            var code = this.name.toUpperCase().charAt(0).concat(this.name.toUpperCase().charAt(this.name.length - 1)).concat(this.productID);

            return code + ", " + this.name + ", " + this.price;
        }

    };

    var bananas = new Product(12458, 'banana', 129.31, new Date("2019-03-25"));
    console.log(bananas);

    var info = bananas.getInfo();
    console.log(info);

    function ShoppingBag() {
        this.bag = [];
        this.addProduct = function (product) {
            var now = new Date();
            if (now < product.expirationDate) {
                this.bag.push(product);
            } else {
                console.log("Product expired");
            }
        };

        this.averagePrice = function () {

        };

    }

    var shoppingList = new ShoppingBag();
    shoppingList.addProduct(bananas);
    var coffee = new Product(36987, "mocha", 456.27, new Date("2019-05-25"));
    shoppingList.addProduct(coffee);
    console.log(shoppingList);


})();
