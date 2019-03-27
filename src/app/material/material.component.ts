import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MaterialHelperComponent } from './material-helper.component';


@Component({
    selector: 'app-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.css']
})
export class MaterialComponent {
    input;
    constructor(private matDialog: MatDialog) { }

    openBottomSheet(event): void {
        console.log();
        this.matDialog.open(MaterialHelperComponent, {
            height: '350px', width: '350px',
            position: { top: String(event.clientY + 20) + 'px', left: String((event.clientX + 20) / 2) + 'px' }
        })
            .afterClosed().subscribe(result => this.input = result);
    }
}
