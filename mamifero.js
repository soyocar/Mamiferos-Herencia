"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(_tipo, _peso, _pelo, _glandulas) {
        this.tipo = _tipo;
        this.peso = _peso;
        this.pelo = _pelo;
        this.glandulas = _glandulas;
    }
    Mamifero.prototype.getTipo = function () {
        return this.tipo;
    };
    Mamifero.prototype.setTipo = function (_tipo) {
        this.tipo = _tipo;
    };
    Mamifero.prototype.getPeso = function () {
        return this.peso;
    };
    Mamifero.prototype.setPeso = function (_peso) {
        this.peso = _peso;
    };
    Mamifero.prototype.getPelo = function () {
        return this.pelo;
    };
    Mamifero.prototype.setPelo = function (_pelo) {
        this.pelo = _pelo;
    };
    Mamifero.prototype.getGlandulas = function () {
        return this.glandulas;
    };
    Mamifero.prototype.setGlandulas = function (_glandulas) {
        this.glandulas = _glandulas;
    };
    Mamifero.prototype.comer = function () {
        console.log("Estoy comiendo: ");
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
