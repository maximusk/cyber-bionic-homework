import {NgModule} from '@angular/core';
import {MyTable} from "./components/my-table/my-table.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MyTableHostComponent} from "./components/my-table-host/my-table-host.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [],
    declarations: [MyTableHostComponent, MyTable],
    providers: [],
})
export class ComponentsModule {
}
