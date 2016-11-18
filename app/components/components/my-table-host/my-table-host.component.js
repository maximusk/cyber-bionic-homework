"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyTableHostComponent = (function () {
    function MyTableHostComponent() {
        this.displayEntriesCount = 3;
        this.products = [
            { id: 1, name: 'product 1', price: 100 },
            { id: 2, name: 'product 2', price: 200 },
            { id: 3, name: 'product 3', price: 300 },
            { id: 4, name: 'product 4', price: 400 },
            { id: 5, name: 'product 5', price: 500 },
            { id: 6, name: 'product 6', price: 600 },
            { id: 7, name: 'product 7', price: 700 },
            { id: 8, name: 'product 8', price: 800 },
            { id: 9, name: 'product 9', price: 900 },
            { id: 10, name: 'product 10', price: 1000 }
        ];
    }
    MyTableHostComponent.prototype.onEntryRemoved = function ($event) {
        var index = this.products.indexOf($event.value);
        this.products.splice(index, 1);
    };
    MyTableHostComponent.prototype.ngOnInit = function () {
    };
    MyTableHostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-table-host',
            templateUrl: 'my-table-host.component.html',
            styleUrls: ['my-table-host.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyTableHostComponent);
    return MyTableHostComponent;
}());
exports.MyTableHostComponent = MyTableHostComponent;
