"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Carnivoro = void 0;
var mamifero_1 = require("./mamifero");
var Carnivoro = /** @class */ (function (_super) {
    __extends(Carnivoro, _super);
    function Carnivoro(_tipo, _peso, _pelo, _glandulas, _tamaño) {
        var _this = _super.call(this, _tipo, _peso, _pelo, _glandulas) || this;
        _this.tamaño = _tamaño;
        _this.alimentacion = 'carne';
        return _this;
    }
    Carnivoro.prototype.comer = function () {
        console.log('Estoy comiendo ' + this.alimentacion);
    };
    return Carnivoro;
}(mamifero_1.Mamifero));
exports.Carnivoro = Carnivoro;
