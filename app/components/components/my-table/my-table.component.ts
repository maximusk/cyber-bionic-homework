import {Component, OnInit, SimpleChange, Input, Output, EventEmitter} from '@angular/core';
import {TableEntry} from "./facade/table-entry";
import {EntryRemoveEvent} from "./facade/entry-remove-event";

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html',
    styleUrls: ['my-table.component.css']
})
export class MyTable implements OnInit {
    @Input() products: Array<TableEntry>;
    @Input('rows') displayEntriesCount: number;
    @Output() entryRemoved: EventEmitter<EntryRemoveEvent>;

    constructor() {
        this.entryRemoved = new EventEmitter();
    }

    removeEntry(entry) {
        this.entryRemoved.emit({
            value: entry
        });
    }

    ngOnChanges(changes: SimpleChange) {
    }

    ngOnInit() {
    }
}