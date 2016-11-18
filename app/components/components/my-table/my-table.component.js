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
var MyTable = (function () {
    function MyTable() {
        this.entryRemoved = new core_1.EventEmitter();
    }
    MyTable.prototype.removeEntry = function (entry) {
        this.entryRemoved.emit({
            value: entry
        });
    };
    MyTable.prototype.ngOnChanges = function (changes) {
    };
    MyTable.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MyTable.prototype, "products", void 0);
    __decorate([
        core_1.Input('rows'), 
        __metadata('design:type', Number)
    ], MyTable.prototype, "displayEntriesCount", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MyTable.prototype, "entryRemoved", void 0);
    MyTable = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-table',
            templateUrl: 'my-table.component.html',
            styleUrls: ['my-table.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyTable);
    return MyTable;
}());
exports.MyTable = MyTable;
