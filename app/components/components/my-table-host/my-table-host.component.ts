import {Component, OnInit} from '@angular/core';
import {TableEntry} from "../my-table/facade/table-entry";

@Component({
    moduleId: module.id,
    selector: 'my-table-host',
    templateUrl: 'my-table-host.component.html',
    styleUrls: ['my-table-host.component.css']
})
export class MyTableHostComponent implements OnInit {
    displayEntriesCount: number;
    products: Array<TableEntry>;

    constructor() {
        this.displayEntriesCount = 3;
        this.products = [
            {id: 1, name: 'product 1', price: 100},
            {id: 2, name: 'product 2', price: 200},
            {id: 3, name: 'product 3', price: 300},
            {id: 4, name: 'product 4', price: 400},
            {id: 5, name: 'product 5', price: 500},
            {id: 6, name: 'product 6', price: 600},
            {id: 7, name: 'product 7', price: 700},
            {id: 8, name: 'product 8', price: 800},
            {id: 9, name: 'product 9', price: 900},
            {id: 10, name: 'product 10', price: 1000}
        ];
    }

    onEntryRemoved($event) {
        let index = this.products.indexOf($event.value);
        this.products.splice(index, 1);
    }

    ngOnInit() {
    }
}