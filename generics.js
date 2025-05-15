var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive() { }
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
// since arguments is an array of objects, we can use the generic type T and return the type of the object is also T, means the same type of the object
var getProducts = function (products) {
    var myIndex = 3;
    return products[myIndex];
};
var Syllable = /** @class */ (function () {
    function Syllable() {
        this.cart = [];
    }
    Syllable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Syllable;
}());
